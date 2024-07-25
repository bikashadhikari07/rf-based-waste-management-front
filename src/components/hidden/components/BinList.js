import React from "react";
import { Table, Button } from "react-bootstrap";

const BinList = ({ bins, handleEditBin }) => {
  return (
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
        {bins.map((bin, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{`${bin.coordinates[1]}, ${bin.coordinates[0]}`}</td>
            <td>{bin.fullness}</td>
            <td>{new Date(bin.lastEmptied).toLocaleDateString()}</td>
            <td>{bin.active ? "Yes" : "No"}</td>
            <td>
              <Button onClick={() => handleEditBin(bin)}>Edit</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BinList;
