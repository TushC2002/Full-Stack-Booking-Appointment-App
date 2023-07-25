const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.use(express.static("public"));

router.get("/", userController.getBookingPage);

router.get("/user", userController.getUser);

router.get("/deleteUser/:id", userController.deleteUser);

router.post("/addUser", userController.addUser);

module.exports = router;
