const router = require("express").Router();

const User = require('./user/user');
router.use("/user", User);




module.exports = router;