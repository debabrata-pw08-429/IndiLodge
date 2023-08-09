// index.js
const express = require("express");
const CONNECTDB = require("./configs/mongoDB");
const authRoutes = require("./routes/auth");
const propertyRoutes = require("./routes/property");
const userRoutes = require("./routes/user");
const addInitialFormData = require("./configs/generateInitialdata");

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/user", userRoutes);

// Test routes_
app.get("/api", async (req, res) => {
  res.send("Server is Working Fine!");
});

app.get("/api/reset", async (req, res) => {
  await addInitialFormData();
  res.send("Database has been properly reset!");
});

const PORT = process.env.PORT || 5000;
CONNECTDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
