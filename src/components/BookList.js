import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: this.props.books };
  }
  deleteBook = (id) => {
    const currentBooks = this.state.books;
    const books = currentBooks.filter(book => book.id !== id);

    this.setState({ books });
  };
  render() {
    return (
      <ul className="book-list">
        {this.state.books.map(book => {
          return (
            <Book
              key={book.id}
              book={book}
              handleDelete={this.deleteBook}
            />
          );
        })}
      </ul>
    );
  }
}

export default BookList;
