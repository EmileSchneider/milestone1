import React, { Component } from 'react';
import './index.css';
import Code from '../Code';

import Paper from 'material-ui/Paper';

class Exercise extends Component {
  render() {
    return (
      <div>
        <h3>Hello World</h3>
        <Paper className=".Paper" zDepth={5}>
          <Code/>
        </Paper>
      </div>
    );
  }
}
export default Exercise
