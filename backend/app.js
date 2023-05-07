require("dotenv").config();
const express = require("express");
const cors = require("cors");

const email = require("./router/email");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/email",email.router);

app.listen(3000,()=>{
  console.log("server started!")
})