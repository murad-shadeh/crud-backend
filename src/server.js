"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
// app.use(express.json()); // middleware to parse JSON

const homeHandler = (req, res) => {
  res.status(200).json({
    code: 200,
    message: "Welcome to the Home Page",
  });
};
app.get("/", homeHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
