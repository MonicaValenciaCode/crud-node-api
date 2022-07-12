const express = require('express');
const router = express.Router();
const {getAllUser} = require('../../controllers/user.controller');

router.get('/',getAllUser);

router.post('/', (req, res)=>{
    res.status(200).json({reponse:"this method add a user "})
});

router.put('/', (req, res)=>{
    res.status(200).json({reponse:"this method update a user"})
});

router.delete('/', (req, res)=>{
    res.status(200).json({reponse:"this method delete a user"})
});

module.exports = router;