import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class Taxesfees extends Component {
  render() {
    return(
      <Row className="show-grid">
        <Col md={6}>Est. taxes & fees</Col>
        <Col md={6}> {`$${this.props.taxes}`} </Col>
      </Row>
    )
  }
}