import React, { Component } from 'react';
import './index.css';
import Day from '../Day';

class Week extends Component {
  render(){
    return (
      <div>
        <h1>Week</h1>
        <Day />
      </div>
    );
  }
}
export default Week;
