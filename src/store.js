import { createStore } from 'redux';

import mainReducer from './reducers';

const configureStore = () => {
  return createStore(mainReducer, {
    books: []
  });
};

export default configureStore;
