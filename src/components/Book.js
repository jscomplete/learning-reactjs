import React from 'react';

const Book = ({ book, handleDelete }) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleDelete(book.id);
  }
  return (
    <li className="book">
      <div className="title">
        {book.title}
      </div>
      <div className="price">
        {book.price}
      </div>
      <a href="#" className="delete" onClick={handleClick}>
        delete
      </a>
    </li>
  );
}

export default Book;
