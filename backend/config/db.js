const mongoose = require("mongoose");

const connectingToDb = async () => {
  try {
    const connecting = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
    console.log(`connected to Mongo DB database ${connecting.connection.host}`);
  } catch (err) {
    console.log(`couldnt connect to db ${err}`);
  }
};

module.exports = connectingToDb;
