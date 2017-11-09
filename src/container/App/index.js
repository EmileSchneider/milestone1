import React, { Component } from 'react';
import './index.css';

import Navigation from '../Navigation';
import Card from '../../presentational/Card';
import Body from '../../presentational/Body';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation title="Home"/>
        <Body>
        <Grid fluid={true}>
          <Row>
            <Col lg={7} md={8}>
              <Row>
                <Col lg={6}>
                  <Card/>
                </Col>
                <Col lg={6}>
                  <Card/>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Card/>
                </Col>
              </Row>
            </Col>
            <Col lg={5} md={4}>
              <Card/>
            </Col>
          </Row>
        </Grid>
        </Body>
      </div>
    );
  }
}
export default App;
