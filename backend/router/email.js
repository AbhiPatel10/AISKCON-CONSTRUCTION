const express = require("express");
const router = express.Router();
const emailController = require("../controller/email");

router
.post("/",emailController.sendMail)

exports.router = router;