import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Complaintsstatus = ({ totalComplaints, todaysComplaints }) => (
  <Row className="mb-4">
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>TotalComplaints</Card.Title>
          <Card.Text>{totalComplaints}</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Complaints recived today</Card.Title>
          <Card.Text>{todaysComplaints}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Complaintsstatus;
