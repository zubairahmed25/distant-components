
const initialState = {
  loggedInAs: '',
  isCreditCardHolder: false,
};

const LOG_IN = 'LOG_IN';

export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      // const copy = Object.assign({}, state, { loggedInAs: action.payload });
      return { ...state, loggedInAs: action.payload };
    case 'APPLY_FOR_CC':
      return { ...state, isCreditCardHolder: true };
    default:
      return state;
  }
}

export function login(name) {
  return {
    type: LOG_IN,
    payload: name,
  };
}