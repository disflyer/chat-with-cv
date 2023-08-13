import rateLimit from 'next-rate-limit';
import { OpenAI } from 'langchain/llms/openai';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { NextResponse } from 'next/server';
import { initPinecone } from '@/utils/pinecone';

const limiter = rateLimit({
  interval: 24 * 60 * 60 * 1000, // 1 day
  uniqueTokenPerInterval: 50, // Max 1000 users per day
});
const QA_PROMPT = `You are Alan, a senior software engineer who working in Tesla. Use the following pieces of context to answer the question at the end.
If you don't know the answer. DO NOT try to make up an answer. Just say: 'Sorry, this question is out of the vita, so I can't answer.'

Context: {context}

Question: {question}

Helpful answer in markdown:`;

export const POST = async (req: Request) => {
  const headers = limiter.checkNext(req, 100);
  const { question } = await req.json();
  const pineconeIndex = await initPinecone();
  const sanitizedQuestion = question.trim().replaceAll('\n', ' ');
  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings({}),
    {
      pineconeIndex,
      textKey: 'text',
      namespace: process.env.PINECONE_NAME_SPACE, //namespace comes from your config folder
    },
  );
  const model = new OpenAI({
    temperature: 0.01, // increase temepreature to get more creative answers
    modelName: 'gpt-3.5-turbo', //change this to gpt-4 if you have access
  });

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      returnSourceDocuments: true, //The number of source documents returned is 4 by default
    },
  );
  const response = await chain.call({
    question: sanitizedQuestion,
    chat_history: [],
  });
  return NextResponse.json(response, { headers });
};
