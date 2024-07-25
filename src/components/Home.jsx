import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import heroImage from "../assest/herosec.png";
import monitorImage from "../assest/binmonitor.png";
import notifyImage from "../assest/binnotify.png";
import collectImage from "../assest/bincollected.png";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid hero-section d-flex align-items-center justify-content-between text-center text-white">
        <div className="text-content">
          <h1>Smart Waste Management for a Cleaner Tomorrow</h1>
          <p>
            Efficient, real-time waste monitoring and collection for a
            sustainable future.
          </p>
          <div className="button-group">
            <Button variant="success" size="lg" className="mx-2">
              Bins
            </Button>
            <Button variant="success" size="lg" className="mx-2">
              Learn More
            </Button>
          </div>
        </div>
        <div className="image-container">
          <img src={heroImage} alt="Hero" className="img-fluid" />
        </div>
      </div>

      {/* Three-Phase Process Section */}
      <div className="threephase">
        <div className="container my-5 process-section">
          <h2 className="text-center mb-5">Our Process</h2>

          {/* Phase 1: Monitor */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-center">
              <img
                src={monitorImage}
                alt="Monitor Phase"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3>Monitor Garbage Levels</h3>
              <p>
                Our system continuously monitors the garbage levels in bins
                using smart sensors. This ensures that we have real-time data on
                waste accumulation, enabling efficient waste management.
              </p>
            </div>
          </div>

          {/* Phase 2: Notify */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-2 text-center">
              <img src={notifyImage} alt="Notify Phase" className="img-fluid" />
            </div>
            <div className="col-md-6 order-md-1">
              <h3>Notify When Full</h3>
              <p>
                When a bin reaches its capacity, our system sends an instant
                notification to the administrators. This allows for timely
                collection and prevents overflow, ensuring cleanliness.
              </p>
            </div>
          </div>

          {/* Phase 3: Collect */}
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src={collectImage}
                alt="Collect Phase"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3>Collection</h3>
              <p>
                Our garbage collectors receive the notifications and promptly
                arrive to collect the waste. This streamlined process minimizes
                delays and ensures that bins are emptied efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
