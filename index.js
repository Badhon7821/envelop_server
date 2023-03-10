const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, (req, res) => {
      console.log(`Connect to db and server running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
