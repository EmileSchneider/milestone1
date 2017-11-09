import React, { Component } from 'react';

import './index.css';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

class Exercise extends Component {
  render() {
    return (
        <Paper className="ExercisePaper" zDepth={1} rounded={false}>
            <h1>{ this.props.name }</h1>
            <p>{ this.props.text }</p>
        </Paper>
    );
  }
}
export default Exercise;
