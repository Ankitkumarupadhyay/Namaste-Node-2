// console.log("hello node")
const express = require("express");

const app = express();

// app.use("/getSecretData", (req, res) => {
//   res.send("This is a secret data....");
// });
// app.use("/test", (req, res) => {
//   res.send("test data....");
// });
// app.use("/hello", (req, res) => {
//   res.send("hello hello hello data....");
// });

// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ firstName: "Ankit", lastName: "Upadhyay" });
// });

//making routes dynamic byusing params

app.get("/user/:id/:name", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Ankit", lastName: "Upadhyay" });
});
// app.post("/user", (req, res) => {
//   res.send("Data saved to DB");
// });
// app.delete("/user", (req, res) => {
//   res.send("Data deleted from DB");
// });

app.use("/", (req, res) => {
  res.send("This is a dashboard....");
});

app.listen(7777, () => {
  console.log("Server is listening on port 7777");
});

// Advanced Routing ----
// 1. /ab?c => means b is optional , api will match routes having /abc and /ac also
// 2. /ab+c => means a and c is fixed in start and last ,but we have multiple b in between , /ac,/abc,/abbc,/abbbc .
// 3. /ab*cd => means ab and cd is fixed in start and last, & we can have anything between these two.
