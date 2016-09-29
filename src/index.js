import React from 'react';
import ReactDOM from 'react-dom';

import { data } from './data';

const Book = ({ book }) => (
  <li>
    {book.title} -- {book.price}
  </li>
);

const BookList = (props) => (
  <ul>
    {props.books.map(book => {
      return (
        <Book key={book.id} book={book} />
      );
    })}
  </ul>
);

ReactDOM.render(
  <BookList books={data.books} />,
  document.getElementById('root')
);
