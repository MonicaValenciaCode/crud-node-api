require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoute  = require("./routes/api");
var cors = require('cors')
app.use(cors())

app.use('/api/', apiRoute);

app.listen(PORT, ()=>{
    console.log("server list: ", PORT);
})

//https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=user-management-data-table