import React, { useEffect, useState } from "react";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import BinStats from "./components/BinStats";
import BinList from "./components/BinList";
import BinModal from "./components/BinModal";
import GarbageCollectorStats from "./components/GarbageCollectorStats";
import BinsMap from "../binsmap/BinsMap";
import "./AdminDashboard.css";
import Complaintsstatus from "./components/Complaints";

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

  const [totalComplaints, settotalComplaints] = useState(0);
  const [todaysComplaints, settodaysComplaints] = useState(0);

  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    fullness: "",
    lastEmptied: "",
    active: "",
  });

  const { logout } = useAuth(); // Using the imported AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    fetchBins();
    fetchGarbageCollectors();
    fetchComplaints();
  }, []);

  const fetchBins = async () => {
    try {
      const response = await axios.get("http://localhost:3002/bins", {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      const data = response.data;
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
    } catch (error) {
      console.error("Error fetching bins:", error);
    }
  };

  const fetchGarbageCollectors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3002/garbageCollectors",
        {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      const data = response.data;
      setTotalGcollector(data.length);
      setAvailableGcollector(data.filter((gc) => !gc.active).length); // Count where active is false
      setOnFieldGcollector(data.filter((gc) => gc.active).length); // Count where active is true
    } catch (error) {
      console.error("Error fetching garbage collectors:", error);
    }
  };

  const fetchComplaints = async () => {
    try {
      const response = await axios.get("http://localhost:3002/complaints/all", {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });

      const data = await response.json();
      settotalComplaints(data.length);

      settodaysComplaints(
        data.filter(
          (complaints) =>
            new Date(complaints.lastEmptied).toDateString() ===
            new Date().toDateString()
        ).length
      );
    } catch (error) {
      console.log("Error fetching complaints", error);
    }
  };

  const handleEditBin = (bin) => {
    setSelectedBin(bin);
    setFormData({
      latitude: bin.coordinates[1], // Assuming coordinates are in [longitude, latitude] format
      longitude: bin.coordinates[0],
      fullness: bin.fullness,
      lastEmptied: bin.lastEmptied,
      active: bin.active,
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (selectedBin) {
      try {
        await axios.put(
          `http://localhost:3002/bins/${selectedBin._id}`,
          {
            latitude: formData.latitude,
            longitude: formData.longitude,
            fullness: formData.fullness,
            lastEmptied: formData.lastEmptied,
          },
          {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` },
          }
        );
        alert("Bin updated successfully");
        setShowModal(false);
        fetchBins(); // Refresh the bin list
      } catch (error) {
        console.error("Error updating bin:", error);
      }
    }
  };

  const handleLogout = () => {
    logout(); // Call logout function from context
    navigate("/account"); // Redirect to login page
  };

  return (
    <Container fluid className="p-4">
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
      <GarbageCollectorStats
        availableGcollector={availableGcollector}
        onFieldGcollector={onFieldGcollector}
        totalGcollector={totalGcollector}
      />
      <Complaintsstatus>
        totalComplaints={totalComplaints}
        todaysComplaints={todaysComplaints}
      </Complaintsstatus>
      <BinStats
        activeBins={activeBins}
        binsFilledToday={binsFilledToday}
        totalBins={totalBins}
      />
      <BinList bins={bins} handleEditBin={handleEditBin} />
      <Row className="mb-4">
        <Col>
          <Card>
            <BinsMap bins={bins} onEditBin={handleEditBin} />
          </Card>
        </Col>
      </Row>
      <BinModal
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        handleChange={handleChange}
        handleSaveChanges={handleSaveChanges}
      />
    </Container>
  );
};

export default AdminDashboard;
