// console.log("hello node")
const express = require("express");

const app = express();



app.use("/getSecretData", (req, res) => {
  res.send("This is a secret data....");
});
app.use("/test", (req, res) => {
  res.send("test data....");
});
app.use("/hello", (req, res) => {
  res.send("hello hello hello data....");
});

app.use("/", (req, res) => {
  res.send("This is a dashboard....");
});

app.listen(7777, () => {
  console.log("Server is listening on port 7777");
});
