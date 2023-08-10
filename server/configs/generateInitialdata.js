const Property = require("../models/PropertyModel");
const { data } = require("../constant");

// Insert demo properties into the database
async function insertDemoProperties() {
  try {
    await Property.deleteMany();
    await Property.insertMany(data);
    console.log("Demo properties inserted successfully.");
  } catch (error) {
    console.error("Error inserting demo properties:", error);
  }
}

module.exports = insertDemoProperties;
