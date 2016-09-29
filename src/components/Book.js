import React from 'react';

const Book = ({ book }) => {
  return (
    <li className="book">
      <div className="title">
        {book.title}
      </div>
      <div className="price">
        {book.price}
      </div>
    </li>
  );
}

export default Book;
