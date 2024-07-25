// src/pages/Account.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import "./Login.css"; // Ensure you import the CSS file

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard"); // Redirect if already authenticated
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        if (token) {
          login(token); // Update the auth context
          navigate("/admin/dashboard");
        } else {
          alert("No token received.");
        }
      } else {
        // Handle login failure
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} lg={4} className="login-form">
          <div className="text-center mb-4">
            <h2>Admin Login</h2>
          </div>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="login-button">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
