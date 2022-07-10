import React from 'react';
import { connect } from 'react-redux';
import { setIncrement, setDecrement, setLoggedIn } from './Redux/actions';

const FirstChildsChild = ({ number, login, setLoggedIn }) => {
  return (
    <div style={{ border: '2px solid orange', margin: '10px' }}>
      <h1>first childs child </h1>
      {number} {login}
      <input
        type="text"
        onChange={(e: { target: { value: string } }) =>
          setLoggedIn(e.target.value)
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.number,
    login: state.loggedInAs,
  };
};

const mapActionToProps = {
  setIncrement,
  setDecrement,
  setLoggedIn,
};

export default connect(mapStateToProps, mapActionToProps)(FirstChildsChild);
