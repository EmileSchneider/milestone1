import React, { Component } from 'react';
import './index.css';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

class Card extends Component {
  render() {
    return(
      <div className="card">
        <Paper zDepth={1} rounded={false}>
          <Subheader className="header">{ "this.props.title" }</Subheader>
          <p className="text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Paper>
      </div>
    );
  }
}
export default Card;
