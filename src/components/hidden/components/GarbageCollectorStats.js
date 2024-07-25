import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const GarbageCollectorStats = ({
  availableGcollector,
  onFieldGcollector,
  totalGcollector,
}) => (
  <Row className="mb-4">
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Available Garbage Collectors</Card.Title>
          <Card.Text>{availableGcollector}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>On Field Garbage Collectors</Card.Title>
          <Card.Text>{onFieldGcollector}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Total Garbage Collectors</Card.Title>
          <Card.Text>{totalGcollector}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default GarbageCollectorStats;
