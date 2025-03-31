const { MongoClient } = require('mongodb');

let client;
module.exports = {
  connect: async () => {
    if (!client) {
      client = new MongoClient(process.env.MONGO_URI);
      await client.connect();
    }
    return client.db('cloud').collection('billing');
  }
};