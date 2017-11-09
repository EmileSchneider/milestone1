import React, { Component } from 'react';

import Subheader from 'material-ui/Subheader';
import Navigation from '../Navigation';

import Exercise from '../../presentational/Exercise';
import Card from '../../presentational/Card';
import Body from '../../presentational/Body';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


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
          <Body>
          <Grid fluid={true}>
            <Row>
              <Col lg={4}>
                {
                  this.state.exercises.map(item => {
                    return <Exercise name={item.name} text={item.text} />
                  })
                }
              </Col>
              <Col lg={4}>
                <Card/>
              </Col>
              <Col lg={4}>
                <Card/>
                <Card/>
              </Col>
            </Row>
          </Grid>
        </Body>
      </div>
    );
  }
}
export default Day;
