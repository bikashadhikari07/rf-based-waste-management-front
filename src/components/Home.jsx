import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import heroImage from "../assest/herosec.png";
// Import the image
import monitorImage from "../assest/herosec.png"; // Import phase 1 image
import notifyImage from "../assest/herosec.png"; // Import phase 2 image
import collectImage from "../assest/herosec.png"; // Import phase 3 image

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid hero-section d-flex align-items-center">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
            <h1>Smart Waste Management for a Cleaner Tomorrow</h1>
            <p>
              Efficient, real-time waste monitoring and collection for a
              sustainable future.
            </p>
            <div>
              <a href="/bins" className="btn btn-primary mr-md-4 mb-2 mb-md-0">
                Get Started
              </a>
              <a href="/about" className="btn btn-secondary ml-md-4">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={heroImage}
              alt="Monitor Notify Collect"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>

      {/* Three-Phase Process Section */}
      <div className="container my-5">
        <h2 className="text-center mb-5">Our Process</h2>

        {/* Phase 1: Monitor */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <img src={monitorImage} alt="Monitor Phase" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>Monitor Garbage Levels</h3>
            <p>
              Our system continuously monitors the garbage levels in bins using
              smart sensors. This ensures that we have real-time data on waste
              accumulation, enabling efficient waste management.
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
            <img src={collectImage} alt="Collect Phase" className="img-fluid" />
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
  );
}

export default Home;
