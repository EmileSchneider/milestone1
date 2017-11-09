import React, { Component } from 'react';

import './index.css';

import Paper from 'material-ui/Paper';


class Body extends Component {
  render() {
    return(
      <Paper className="bodypaper" zDepth={1} rounded={false}>
        { this.props.children }
      </Paper>
    );
  }
}
export default Body;
