const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoute  = require("./routes/api");
const {getWords} = require("./MySQL/queries");

const word = getWords()
        .then(res=>{console.log(res, '-----')})
        .catch(err=>console.log(err));

app.use('/api/', apiRoute);

app.listen(PORT, ()=>{
    console.log("server list: ", PORT);
})