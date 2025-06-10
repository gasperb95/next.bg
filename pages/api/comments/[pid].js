import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Store your MongoDB URI in an environment variable
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the client across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('Blog'); // Replace with your database name

    if (req.method === 'GET') {
      // Example query: Fetch all documents from a collection
      const pid = req.query.pid;
      // Get the pid from the query parameters
      const collection = db.collection('comments'); // Replace with your collection name
      const data = await collection.find({"blogpost": pid}).toArray();
      res.status(200).json({ success: true, data });
    } else if (req.method === 'POST') {
      // Example query: Insert a document into a collection
      const collection = db.collection('yourCollectionName');
      const result = await collection.insertOne(req.body);
      res.status(201).json({ success: true, result });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
