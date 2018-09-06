import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Estimatedtotal extends Component {
  render() {
    return(
      <Row>
        <Col md={6}>Est. Total</Col>
        <Col md={6}>{`$${this.props.price}`}</Col>
      </Row>
    )
  }
};
