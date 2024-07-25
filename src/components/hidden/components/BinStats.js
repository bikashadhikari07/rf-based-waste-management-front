import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const BinStats = ({ activeBins, binsFilledToday, totalBins }) => (
  <Row className="mb-4">
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Active Bins</Card.Title>
          <Card.Text>{activeBins}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Bins Filled Today</Card.Title>
          <Card.Text>{binsFilledToday}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Total Bins</Card.Title>
          <Card.Text>{totalBins}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default BinStats;
