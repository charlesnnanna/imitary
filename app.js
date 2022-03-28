const express = require ("express")
const cors = require ("cors")
const app = express()
const port = 5000


app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World ... I am working fine")
})

app.listen(port, () => {
    console.log ("Server is runningg at Localhost 5000")
})