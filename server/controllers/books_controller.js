let books = []
let id = 0;
module.exports = {
    getBooks(req, res) {
        res.status(200).send(books)
    }
}