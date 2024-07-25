import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import heroImage from "../assest/herosec.png"; // Import the image

function Home() {
  return (
    <div className="container-fluid hero-section d-flex align-items-center">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
          <h1>Smart Waste Management for a Cleaner Tomorrow</h1>
          <p>
            Efficient, real-time waste monitoring and collection for a
            sustainable future.
          </p>
          <div>
            <a
              href="/get-started"
              className="btn btn-primary mr-md-4 mb-2 mb-md-0"
            >
              Get Started
            </a>
            <a href="/learn-more" className="btn btn-secondary ml-md-4">
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
  );
}

export default Home;
