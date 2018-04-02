
// {
//   type: 'USER_LOGGED_IN'
//   payload: 'T$'
// }

export function login(name) {
  return {
    type: 'USER_LOGGED_IN',
    payload: name,
  };
}

const initialState = {
  loginName: '',
  isCreditCardHolder: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      const newState = { ...state, loginName: action.payload };
      return newState;
    default:
      return state;
  }
}