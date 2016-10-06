import React from 'react';
import Author from './Author';

const Book = ({ book, author, handleDelete }) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleDelete(book.id);
  };

  const formatPrice = priceInCents => {
    if (priceInCents === undefined) {
      return '';
    }
    return `$ ${(priceInCents/100).toFixed(2)}`;
  };

  return (
    <li className="book">
      <div className="title">
        {book.title}
      </div>
      {book.authors.map(author => <Author key={author.id} {...author} />)}
      <div className="price">
        {formatPrice(book.price)}
      </div>
      <a href="#" className="delete" onClick={handleClick}>
        delete
      </a>
    </li>
  );
};

export default Book;
