import React, { Component } from 'react';

import Navigation from '../Navigation';

import Exercise from '../../presentational/Exercise';
import Codeblock from '../Codeblock'
import Card from '../../presentational/Card';
import Body from '../../presentational/Body';
import Documentation from '../../presentational/Documentation';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class Working extends Component {
  render(){
    return (
      <div>
        <Navigation title="Working"/>
        <Body>
        <Grid fluid={true}>
          <Row>
            <Col lg={3}>
              <Documentation/>
            </Col>
            <Col lg={9}>
              <Exercise name="Hello World" text="writeconsole."/>
              <Codeblock/>
            </Col>
          </Row>
        </Grid>
        </Body>
      </div>
    );
  }
}
export default Working;
