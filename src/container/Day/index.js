import React, { Component } from 'react';

import Subheader from 'material-ui/Subheader';
import Navigation from '../Navigation';

import Exercise from '../Exercise';

class Day extends Component {

  render() {
    this.state = {
      exercises: [
        {
          name: "Hello World",
          text: "Huhlllhuhihuuhuhuhuh"
        },
        {
          name: "Hello Hu",
          text: "adsfjjksadflasdlf"
        },
        {
          name: "Hello You there",
          text: "qwierqweiroqweur"
        },
        {
          name: "Hello Bye bye",
          text: "zxcghvjzxgchvxgcjhv"
        }
      ]
    }
    return (
      <div>
        <Navigation title="Day"/>
        {
          this.state.exercises.map(item => {
            return <Exercise name={item.name} text={item.text} />
          })
        }
      </div>
    );
  }
}
export default Day;
