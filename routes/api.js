const router = require("express").Router();

const User = require("./user/user");
router.use("/user", User);

const Word = require("./word/word");
router.use("/word", Word);

//words

//

// word
// id
// english
// spanish

module.exports = router;
