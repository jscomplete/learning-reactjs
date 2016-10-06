import React from 'react';

import Book from './Book';
import Form from './Form';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [], authors: {} };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/books")
      .then(response => response.json())
      .then(books => {
        this.setState({ books })
      });
    fetch("http://localhost:8000/api/authors")
      .then(response => response.json())
      .then(authors => {
        this.setState({ authors })
      });

  }
  deleteBook = (id) => {
    const currentBooks = this.state.books;
    const books = currentBooks.filter(book => book.id !== id);

    this.setState({ books });
  };
  addBook = (title, price) => {
    this.setState({
      books: this.state.books.concat({
        id: Date.now(),
        title,
        price
      })
    });
  };
  render() {
    return (
      <ul className="book-list">
        {this.state.books.map(book => {
          return (
            <Book
              key={book.id}
              book={book}
              author={this.state.authors[book.authorId]}
              handleDelete={this.deleteBook}
            />
          );
        })}
        <Form addBookAction={this.addBook} />
      </ul>
    );
  }
}

export default BookList;
