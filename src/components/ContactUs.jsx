import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css"; // Ensure you create this CSS file

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/contact",
        formData
      ); // Updated URL
      if (response.status === 201) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err.response || err.message);
      setError("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="container-fluid contact-container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="contact-form">
            <h1 className="text-center mb-4">Contact Us</h1>
            {submitted && (
              <div className="alert alert-success">
                Form submitted successfully!
              </div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
