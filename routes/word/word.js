const router = require("express").Router();
// const router = express.Router();
const {
  getAllword,
  postWord,
  putWord,
  deleteWord,
} = require("../../controllers/word.controller");

router.get("/", getAllword);

router.post("/", postWord);

router.put("/", putWord);

router.delete("/", deleteWord);

module.exports = router;
