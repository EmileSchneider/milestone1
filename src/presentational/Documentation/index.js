import React, { Component } from 'react';
import './index.css';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

class Documentation extends Component {
  render(){
    return(
      <div className="Documentationdiv">
        <Paper zDepth={1} rounded={false}>
          <h1>{ "Console.log()" }</h1>
          <p>Outputs a message to the Web Console.</p>
          <code>console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);</code>
          <p>
          obj1 ... objN
A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
msg
A JavaScript string containing zero or more substitution strings.
subst1 ... substN
JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output.
          </p>
        </Paper>
      </div>
    );
  }
}
export default Documentation;
