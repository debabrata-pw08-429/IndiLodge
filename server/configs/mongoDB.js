const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = async () => {
  const databaseURL = process.env.DB_URL;

  try {
    const connection = await mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully!");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to handle it outside this function
  }
};

module.exports = connectToDatabase;
