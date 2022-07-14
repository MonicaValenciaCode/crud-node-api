const express = require("express");
const router = express.Router();
const { getAllUser, postUser, putUser, deleteUser, getUser } = require("../../controllers/user.controller");

router.get("/", getAllUser);

router.get("/:id", getUser);

router.post("/", postUser);

router.put("/", putUser);

router.delete("/", deleteUser);


module.exports = router;

//primero importatamos Route de express

//importamos el callback del controlador

//en el controlador, creamos el callback

//exportamos la función en el modulo