
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://jalalahmednafiz:${process.env.DB_PASSWORD}@cluster0.gqmty7y.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
  }catch(err) {
    console.log(err);
}
}
run();

module.exports=client;
