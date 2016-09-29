import React from 'react';
import ReactDOM from 'react-dom';

import { data } from './data';

const Book = ({ book }) => (
  <li>
    {book.title} -- {book.price}
  </li>
);

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: this.props.books };
  }
  render() {
    return (
      <ul>
        {this.state.books.map(book => {
          return (
            <Book key={book.id} book={book} />
          );
        })}
      </ul>
    );
  }
}

ReactDOM.render(
  <BookList books={data.books} />,
  document.getElementById('root')
);
