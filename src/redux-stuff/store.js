import { createStore } from 'redux';

const reducer = storeState => storeState;

const initialState = {
  loginName: 'M$',
  isCreditCardHolder: true,
};

const store = createStore(reducer, initialState);

export { store };

