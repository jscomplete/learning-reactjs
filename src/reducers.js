const mainReducer = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE_BOOKS':
      return {
        ...state,
        books: action.books
      };
    case 'DELETE_BOOK':
      return {
        ...state,
        books: state.books.filter(book =>
          book.id !== action.bookId
        )
      };
    case 'ADD_BOOK':
      return {
        ...state,
        books: state.books.concat(action.newBook)
      };
    default:
      return state;
  }
};

export default mainReducer;
