const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const { data } = require('./data');

app.get('/api/books', (req, res) => {
  res.send(data.books);
});

app.get('/api/authors', (req, res) => {
  res.send(data.authors);
});

app.listen(8000, () => {
  console.log('API server is at port 8000');
})
