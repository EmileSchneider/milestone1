import React, { Component } from 'react';

import Exercisetext from '../.././presentational/Exercisetext';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

class Exercise extends Component {

  render() {
    return (
        <Paper zDepth={2}>
            <Exercisetext name={ this.props.name } text={ this.props.text } />
        </Paper>
    );
  }
}
export default Exercise;
