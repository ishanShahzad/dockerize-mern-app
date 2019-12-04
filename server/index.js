const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../dist")));
// mongoose
//   .connect(
//     "mongodb+srv://vvorkclass103:s12345@cluster0-aoeoc.mongodb.net/test?retryWrites=true&w=majority",
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("db connected"));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log("server is listening on port 8081");
});
