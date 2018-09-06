import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

export default class Pickupsavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>Some text here</p>
      </Tooltip>
    )
    return(
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div className="pickupSavings">Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col className="totalSavings" md={6}>{`$${this.props.price}`}</Col>
      </Row>
    )
  }
}