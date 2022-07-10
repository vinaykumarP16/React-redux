const initalState = {
  number: 0,
  name: 'Vinay',
  loggedInAs: 'guest user',
};

const reducer = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, number: state.number + 1 };
    case 'DECREMENT':
      return { ...state, number: state.number - 1 };
    case 'NAME_CHANGE':
      return { ...state, name: action.payload };
    case 'LOGGED_IN':
      return { ...state, loggedInAs: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
