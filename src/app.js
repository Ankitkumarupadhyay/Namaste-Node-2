// const { adminAuth, userAuth } = require("./middleware/adminAuthenticate");
const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Ankit",
    lastName: "Kumar",
    emailId: "ankitupadhyay@gmail.com",
    password: "Ankit@428",
    age: 20,
    gender: "male",
  };
  // new instance of user model
  const user = new User(userObj);
  try {
    await user.save();
    res.send("User added succesfully");
  } catch (err) {
    res.status(400).send("User not added");
  }
});

connectDB()
  .then(() => {
    console.log("Database connected succesfully");
    app.listen(7777, () => {
      console.log("Server is listening on port 7777");
    });
  })
  .catch((err) => {
    console.error("Some error occured");
  });

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

// app.get("/user/:id/:name", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Ankit", lastName: "Upadhyay" });
// });

// app.post("/user", (req, res) => {
//   res.send("Data saved to DB");
// });
// app.delete("/user", (req, res) => {
//   res.send("Data deleted from DB");
// });

// app.use("/", (req, res) => {
//   res.send("This is a dashboard....");
// });

// app.use(
//   "/user",
//   (req, res, next) => {

//     console.log("This is response of route 1");
//     // res.send("Response!!!");
//     // console.log("Response 2 send");
//     next();
//   },
//   (req, res) => {
//     console.log("This is response of route handler 2");
//     res.send("Response 2");
//     console.log("Response 2 send");
//   }
// );

// middleware ----

// app.use("/admin", adminAuth);

// app.use("/admin/getAllData", (req, res) => {
//   console.log("Data send");
//   res.send("Users data");
// });
// app.use("/admin/deleteUser", (req, res) => {
//   console.log("User deleted from db");
//   res.send("User deleted from db");
// });
// app.use("/user", userAuth, (req, res) => {
//   console.log("User's data");
//   res.send("User's data");
// });

// app.use("/user", (req, res ) => {
//   throw new Error("abcd")
//   res.send("Data is being sent");
// });
// app.use("/", (err ,req, res ,next) => {
//  if(err){
//   res.status(500).send("Something went wrong")
//  }
// });

// Advanced Routing ----
// 1. /ab?c => means b is optional , api will match routes having /abc and /ac also
// 2. /ab+c => means a and c is fixed in start and last ,but we have multiple b in between , /ac,/abc,/abbc,/abbbc .
// 3. /ab*cd => means ab and cd is fixed in start and last, & we can have anything between these two.

// mongodb+srv://ankitupadhyay4519:5vacK5344gBY0BrN@namastenode.xrfjt.mongodb.net/
