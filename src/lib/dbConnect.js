import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URL;
const dbname = process.env.DBNAME;

export const collections = {
  PRODUCTS: "products",
  BOOKINGS: "bookings",
  USERS: "users",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = async (collectionName) => {
  if (!client.topology?.isConnected()) {
    await client.connect();
  }
  return client.db(dbname).collection(collectionName);
};
