const express = require ("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World ... I am working fine")
})

app.listen(port, () => {
    console.log ("Server is runningg at Localhost 3000")
})