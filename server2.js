// server-express.js
const express = require('express')
const app = express() // initialize app
const port = 3000 || process.env.PORT;

// GET callback function returns a response message
const responseInitial  = (req, res)=> {
    res.send('Esto es un controlador')
}

app.get('/ruta',responseInitial);

app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`)
});


