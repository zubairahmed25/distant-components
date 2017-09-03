export const SET_LOGGED_IN_AS = 'SET_LOGGED_IN_AS';
export const SET_IS_CREDIT_CARD_HOLDER = 'SET_IS_CREDIT_CARD_HOLDER';

var initialState = {
  loggedInAs: '',
  isCreditCardHolder: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGGED_IN_AS:
      return {
        ...state,
        loggedInAs: action.payload
      };
    case SET_IS_CREDIT_CARD_HOLDER:
      return {
        ...state,
        isCreditCardHolder: action.payload
      };
  }
  return state;
};

export function setLoggedInAs(name) {
  return {
    type: SET_LOGGED_IN_AS,
    payload: name
  }
};

export function setIsCreditCardHolder(value) {
  return {
    type: SET_IS_CREDIT_CARD_HOLDER,
    payload: value
  }
};
