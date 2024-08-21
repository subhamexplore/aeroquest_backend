const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.mongoURI;
mongoose
  .connect(mongoURI)
  .then(async () => {
    console.log("Connection Successful");

    const db = mongoose.connection.db;
    const collection = db.collection("contact");

    try {
      const data = await collection.find({}).toArray();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  })
  .catch((e) => {
    console.log("No Connection", e);
  });
