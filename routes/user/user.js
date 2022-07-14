const express = require("express");
const router = express.Router();
const { getAllUser, postUser, putUser, deleteUser } = require("../../controllers/user.controller");

router.get("/", getAllUser);

router.post("/", postUser);

router.put("/", putUser);

router.delete("/", deleteUser);


module.exports = router;
