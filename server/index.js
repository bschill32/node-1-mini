const express = require("express")
const bc = require('./controllers/books_controller')
const app = express()
const port = 4000;

app.get('/api/books', bc.getBooks)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})