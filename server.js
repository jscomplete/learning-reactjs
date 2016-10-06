const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let { data } = require('./data');
const getBookAuthors = book => {
  // book.authorId, book.authorIds
  const authorIds = book.authorId ? [book.authorId] : book.authorIds;

  return authorIds.map(authorId =>
    Object.assign({}, { id: authorId }, data.authors[authorId])
  );
};

app.get('/api/books', (req, res) => {
  res.send(data.books.map(book => {
    return Object.assign({}, book, {
      authors: getBookAuthors(book)
    });
  }));
});

app.delete('/api/books/:bookId', (req, res) => {
  data.books = data.books.filter(book =>
    book.id !== Number(req.params.bookId)
  );
  res.send({ deleted: true });
});

app.listen(8000, () => {
  console.log('API server is at port 8000');
})
