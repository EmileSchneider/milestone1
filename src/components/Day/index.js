import React, { Component } from 'react';
import './index.css';
import Exercise from '../exercise';

class Day extends Component {
  render() {
    return (
      <div>
        <h2>Monday</h2>
        <Exercise />
      </div>
    );
  }
}
export default Day;
