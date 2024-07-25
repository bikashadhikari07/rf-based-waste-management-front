import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Table,
} from "react-bootstrap";
import BinsMap from "../binsmap/BinsMap";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeBins, setActiveBins] = useState(0);
  const [binsFilledToday, setBinsFilledToday] = useState(0);
  const [totalBins, setTotalBins] = useState(0);
  const [totalGcollector, setTotalGcollector] = useState(0);
  const [availableGcollector, setAvailableGcollector] = useState(0);
  const [onFieldGcollector, setOnFieldGcollector] = useState(0);
  const [bins, setBins] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBin, setSelectedBin] = useState(null);

  useEffect(() => {
    // Fetch bin data from the server
    fetch("http://localhost:3002/bins")
      .then((response) => response.json())
      .then((data) => {
        setBins(data);
        setActiveBins(data.filter((bin) => bin.fullness > 0).length);
        setBinsFilledToday(
          data.filter(
            (bin) =>
              new Date(bin.lastEmptied).toDateString() ===
              new Date().toDateString()
          ).length
        );
        setTotalBins(data.length);
      });

    // Fetch garbage collector data from the server
    fetch("http://localhost:3002/garbageCollectors/")
      .then((response) => response.json())
      .then((data) => {
        setTotalGcollector(data.length);
        setAvailableGcollector(
          data.filter((gc) => !gc.active).length // Count where active is false
        );
        setOnFieldGcollector(
          data.filter((gc) => gc.active).length // Count where active is true
        );
      });
  }, []);

  const handleEditBin = (bin) => {
    setSelectedBin({
      ...bin,
      lastEmptied: new Date(bin.lastEmptied).toISOString().split("T")[0], // Format date correctly
    });
    setShowModal(true);
  };

  const handleSaveChanges = () => {
    // Ensure selectedBin.lastEmptied is a valid date before converting to ISO string
    const lastEmptiedDate = new Date(selectedBin.lastEmptied);
    const lastEmptiedISOString = isNaN(lastEmptiedDate.getTime())
      ? null // Handle invalid date
      : lastEmptiedDate.toISOString();

    console.log("Updating bin with data:", {
      ...selectedBin,
      lastEmptied: lastEmptiedISOString,
    });

    fetch(`http://localhost:3002/bins/${selectedBin._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedBin,
        lastEmptied: lastEmptiedISOString,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to update bin: ${response.statusText}`);
        }
        return response.json();
      })
      .then((updatedBin) => {
        console.log("Updated bin:", updatedBin);
        setShowModal(false);
        // Fetch updated bin data
        return fetch("http://localhost:3002/bins");
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch bins: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched bins after update:", data);
        setBins(data);
        setActiveBins(data.filter((bin) => bin.fullness > 0).length);
        setBinsFilledToday(
          data.filter(
            (bin) =>
              new Date(bin.lastEmptied).toDateString() ===
              new Date().toDateString()
          ).length
        );
        setTotalBins(data.length);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <Container fluid className="p-4">
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
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Bin List</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Coordinates</th>
                    <th>Fullness</th>
                    <th>Last Emptied</th>
                    <th>Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bins.map((bin, idx) => (
                    <tr key={bin._id}>
                      <td>{idx + 1}</td>
                      <td>{`${bin.coordinates[1]}, ${bin.coordinates[0]}`}</td>
                      <td>{bin.fullness}%</td>
                      <td>{new Date(bin.lastEmptied).toLocaleDateString()}</td>
                      <td>{bin.fullness > 0 ? "Yes" : "No"}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => handleEditBin(bin)}
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <BinsMap bins={bins} onEditBin={handleEditBin} />
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Bin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBin && (
            <Form>
              <Form.Group controlId="formLatitude">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedBin.coordinates[1]}
                  onChange={(e) =>
                    setSelectedBin({
                      ...selectedBin,
                      coordinates: [
                        selectedBin.coordinates[0],
                        parseFloat(e.target.value),
                      ],
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formLongitude">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedBin.coordinates[0]}
                  onChange={(e) =>
                    setSelectedBin({
                      ...selectedBin,
                      coordinates: [
                        parseFloat(e.target.value),
                        selectedBin.coordinates[1],
                      ],
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formFullness">
                <Form.Label>Fullness</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedBin.fullness}
                  onChange={(e) =>
                    setSelectedBin({
                      ...selectedBin,
                      fullness: parseFloat(e.target.value),
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formLastEmptied">
                <Form.Label>Last Emptied</Form.Label>
                <Form.Control
                  type="date"
                  value={selectedBin.lastEmptied}
                  onChange={(e) =>
                    setSelectedBin({
                      ...selectedBin,
                      lastEmptied: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
