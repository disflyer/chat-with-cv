import { PineconeClient } from '@pinecone-database/pinecone';

export const initPinecone = async () => {
  const client = new PineconeClient();
  await client
    .init({
      environment: process.env.PINECONE_ENVIRONMENT ?? '',
      apiKey: process.env.PINECONE_API_KEY ?? '',
    })
    .then(res => console.log('success'));
  const pineconeIndex = client.Index(process.env.PINECONE_INDEX!);
  return pineconeIndex;
};
