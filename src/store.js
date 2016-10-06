import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import mainReducer from './reducers';

const configureStore = () => {
  return createStore(
    mainReducer,
    { books: [] },
    applyMiddleware(reduxPromise)
  );
};

export default configureStore;
