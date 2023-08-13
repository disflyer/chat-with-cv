import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { initPinecone } from '@/utils/pinecone';
import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
import { Document } from 'langchain/document';

export const GET = async () => {
  console.log('creating vector store...');
  /*create and store the embeddings in the vectorStore*/
  const embeddings = new OpenAIEmbeddings();
  const profile: any = await get('profile');
  const profileDocs = profile?.map(
    (p: any) =>
      new Document({
        metadata: { type: 'profile' },
        pageContent: p,
      }),
  );

  const pineconeIndex = await initPinecone();
  await pineconeIndex.delete1({
    deleteAll: true,
    namespace: process.env.PINECONE_NAME_SPACE,
  });
  try {
    await PineconeStore.fromDocuments(profileDocs, embeddings, {
      pineconeIndex,
      namespace: process.env.PINECONE_NAME_SPACE,
      textKey: 'text',
    });
  } catch (error) {
    console.log('ingest error', error);
  }
  console.log('ingest suceess');
  return NextResponse.json('ok');
};
