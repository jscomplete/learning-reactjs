export const receiveBooks = (books) => ({
  type: 'RECEIVE_BOOKS',
  books
});

// special

export const fetchBooks = (dispatch) => {
  fetch("http://localhost:8000/api/books")
    .then(response => response.json())
    .then(books => {
      dispatch(receiveBooks(books))
    });
}
