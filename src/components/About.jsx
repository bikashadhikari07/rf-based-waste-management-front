import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4">About Wastee</h1>
        <p className="lead">Smart Waste Management for a Cleaner Tomorrow</p>
      </div>

      <div className="text-center mb-5">
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-text">
          Welcome to Wastee, a smart waste management system designed to create
          a cleaner and more sustainable future. Our innovative solution
          monitors garbage levels in real-time, notifies administrators when
          bins are full, and ensures timely collection by garbage collectors.
        </p>
      </div>

      <div className="text-center mb-5">
        <h2 className="section-title">Features</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Real-Time Monitoring</h5>
                <p className="card-text">
                  Smart sensors track the garbage levels in bins, providing
                  up-to-date data.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Live Map Marker with Bin Information
                </h5>
                <p className="card-text">
                  View live markers on the map with detailed bin information
                  including fullness and last emptied time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Garbage Collector Vehicle Real-Time Marker
                </h5>
                <p className="card-text">
                  Track garbage collector vehicles in real-time on the map with
                  their current locations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Instant Notifications</h5>
                <p className="card-text">
                  Administrators are alerted when bins are full, ensuring timely
                  waste collection.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Efficient Collection</h5>
                <p className="card-text">
                  Garbage collectors receive notifications and promptly collect
                  the waste, preventing overflow and maintaining cleanliness.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Data Analytics</h5>
                <p className="card-text">
                  Detailed reports and analytics help in optimizing waste
                  management strategies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User-Friendly Interface</h5>
                <p className="card-text">
                  Easy-to-use dashboard for monitoring and managing waste
                  collection activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h2 className="section-title">Contact Information</h2>
        <p>
          If you have any questions or need further information, feel free to
          reach out to me:
        </p>
        <p>
          <strong>Name:</strong> Bikash Adhikari <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:iambikashadhikari07@gmail.com">
            iambikashadhikari07@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
