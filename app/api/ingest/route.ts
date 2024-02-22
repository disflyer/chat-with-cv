import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { PineconeStore } from '@langchain/pinecone'
import { initPinecone } from '@/utils/pinecone'
import { NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'
import { Document } from 'langchain/document'
import { PINECONEINDEX_NS } from '@/share/constant'

export const GET = async () => {
  console.log('creating vector store...')
  /*create and store the embeddings in the vectorStore*/
  const embeddings = new OpenAIEmbeddings()
  const profile: any = await get('profile')
  const profileDocs = profile?.map(
    (p: any) =>
      new Document({
        metadata: { type: PINECONEINDEX_NS },
        pageContent: p,
      }),
  )

  const pineconeIndex = await initPinecone()
  // await pineconeIndex.namespace(PINECONEINDEX_NS).deleteAll()
  try {
    await PineconeStore.fromDocuments(profileDocs, embeddings, {
      pineconeIndex,
      namespace: process.env.PINECONE_NAME_SPACE,
      textKey: 'text',
    })
  } catch (error) {
    console.log('ingest error', error)
  }
  console.log('ingest suceess')
  return NextResponse.json('ok')
}
