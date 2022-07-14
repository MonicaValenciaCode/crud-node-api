const router = require("express").Router();
const User = require("./user/user");
const Word = require("./word/word");

router.use("/user", User);
router.use("/word", Word);

module.exports = router;
