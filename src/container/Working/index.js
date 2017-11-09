import React, { Component } from 'react';

import Navigation from '../Navigation';

import Exercisetext from '../../presentational/Exercisetext';
import Codeblock from '../Codeblock'
//import Commentblock from '../Commentblock'

class Working extends Component {

  render(){
    return (
      <div>
        <Navigation title="Working"/>
        <Exercisetext name={"Hello Dudu"} text={"jo this works"}/>
        <Codeblock/>
      </div>
    );
  }
}
export default Working;
