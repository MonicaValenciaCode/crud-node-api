const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const apiRoute  = require("./routes/api");

app.use('/api/', apiRoute);

app.listen(PORT, ()=>{
    console.log("server list: ", PORT);
})