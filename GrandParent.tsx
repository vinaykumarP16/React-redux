import React from 'react';
import { setIncrement, setDecrement, setLoggedIn } from './Redux/actions';
import Childrens from './Childrens';
import { connect } from 'react-redux';

const GrandParent = (props) => {
  const { number, setIncrement, setDecrement, logInName } = props;

  console.log(logInName);

  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <h6>{`logged in as ${logInName}`}</h6>
      this is grand parent = {number}
      <button onClick={setIncrement}>+</button>
      <button onClick={setDecrement}>-</button>
      <input type="text" onChange={(e) => setLoggedIn(e.target.value)} />
      <Childrens />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.number,
    logInName: state.loggedInAs,
  };
};

const mapActionToProps = {
  setIncrement,
  setDecrement,
  setLoggedIn,
};

export default connect(mapStateToProps, mapActionToProps)(GrandParent);
