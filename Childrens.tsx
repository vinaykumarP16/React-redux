import React from 'react';
import FirstChildsChild from './FirstChildsChild';
import { connect } from 'react-redux';

const Childrens = () => {
  return (
    <div style={{ border: '2px solid blue', margin: '10px' }}>
      <h1> Grand Parents Childrens here </h1>
      <FirstChild />
      <SecondChild />
    </div>
  );
};

export default Childrens;

const FirstChild = () => {
  return (
    <div style={{ border: '2px solid grey', margin: '10px' }}>
      <h1>first child </h1>
      <FirstChildsChild />
    </div>
  );
};

const SecondChild = () => {
  return (
    <div style={{ border: '2px solid green', margin: '10px' }}>
      <h1>second child </h1>
    </div>
  );
};
