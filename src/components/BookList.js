import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: this.props.books };
  }
  render() {
    return (
      <ul className="book-list">
        {this.state.books.map(book => {
          return (
            <Book key={book.id} book={book} />
          );
        })}
      </ul>
    );
  }
}

export default BookList;
