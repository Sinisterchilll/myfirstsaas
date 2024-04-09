import { Pinecone } from '@pinecone-database/pinecone';

export const pinecone = new Pinecone({
    apiKey: 'YOUR_API_KEY',
    // environment: 'us-east1-gcp', 
});
