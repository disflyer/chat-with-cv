import { Pinecone } from '@pinecone-database/pinecone'

export const initPinecone = async () => {
  const client = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY as string,
  })
  const index = client.index('test')
  return index
}
