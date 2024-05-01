const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const Router = require("./routes/Route.js");

const { DATABASE_NAME, DATABASE_PASSWORD } = process.env;
const app = express();
const PORT = 5000;

app.use(cors({
    origin:["https://bsa-hostle-website.vercel.app"],
    methods:["POST","GET","PUT"],
    credentials:true
}));
app.use(express.json());
app.use("/api", Router);

if (!DATABASE_NAME || !DATABASE_PASSWORD) {
  console.error(
    "Database name or password is missing from the environment variables"
  );
  process.exit(1);
}

mongoose
  .connect(
    `mongodb+srv://${DATABASE_NAME}:${DATABASE_PASSWORD}@cluster0.y2r2pc1.mongodb.net/${DATABASE_NAME}`
  )
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
    //  process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`Server Running At Port ${PORT}`);
});
