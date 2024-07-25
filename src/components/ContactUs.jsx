import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css"; // Ensure you create this CSS file

function ContactUs() {
  return (
    <div className="container-fluid contact-container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="contact-form">
            <h1 className="text-center mb-4">Contact Us</h1>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
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
