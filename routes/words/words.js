const express = require("express");
const router = express.Router();
const {
  getAllwords,
  postWord,
  putWord,
  deleteWord,
} = require("../../controllers/word.controller");

router.get("/", getAllwords);

router.post("/", postWord);

router.put("/", putWord);

router.delete("/", deleteWord);

module.exports = router;
