export const setIncrement = () => ({ type: 'INCREMENT' });

export const setDecrement = () => ({ type: 'DECREMENT' });

export const setName = (payload) => ({ type: 'NAME_CHANGE', payload });

export const setLoggedIn = (payload) => ({ type:'LOGGED_IN', payload });
