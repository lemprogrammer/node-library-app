const express = require('express')
const { log } = require('console')

const PORT = 5000

const app = express()

app.get('/', (req, res) =>res.send("localhost:" + PORT))

app.listen(PORT, err => log('running server on port, ' + PORT))