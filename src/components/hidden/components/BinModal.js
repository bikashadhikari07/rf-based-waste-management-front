import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BinModal = ({
  showModal,
  setShowModal,
  formData,
  handleChange,
  handleSaveChanges,
}) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Bin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSaveChanges}>
          <Form.Group controlId="formLatitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="text"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLongitude">
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              type="text"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFullness">
            <Form.Label>Fullness</Form.Label>
            <Form.Control
              type="text"
              name="fullness"
              value={formData.fullness}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLastEmptied">
            <Form.Label>Last Emptied</Form.Label>
            <Form.Control
              type="date"
              name="lastEmptied"
              value={formData.lastEmptied}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BinModal;
