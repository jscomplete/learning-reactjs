import React from 'react';
import ReactDOM from 'react-dom';

import { data } from './data';

import BookList from './components/BookList';

ReactDOM.render(
  <BookList books={data.books} />,
  document.getElementById('root')
);
