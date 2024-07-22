import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "leaflet/dist/leaflet.css";

import "./AdminDashboard.css";
import BinsMap from "../binsmap/BinsMap";

const AdminDashboard = () => {
  const activeBins = 12;
  const binsFilledToday = 3;
  const totalBins = 50;
  const totalGcollector = 2;
  const AvailableGcollector = 1;
  const OnFieldGcollector = 1;
  //27.666371208832715, 84.43503905163637

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Available G collector</Card.Title>
              <Card.Text>{AvailableGcollector}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title> On Field G collector</Card.Title>
              <Card.Text>{OnFieldGcollector}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Total G collector</Card.Title>
              <Card.Text>{totalGcollector}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* second row of admin dash */}
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
      <Row className="mb-10">
        <Col id="adminmapcol">
          <Card>
            <BinsMap />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
