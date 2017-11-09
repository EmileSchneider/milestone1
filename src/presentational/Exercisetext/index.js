import React, { Component } from 'react';

class Exercisetext extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.name }</h1>
        <p>{ this.props.text }</p>
      </div>
    )
  }
}
export default Exercisetext;
