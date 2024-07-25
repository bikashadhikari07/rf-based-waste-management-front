//from react
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

//comp
import Nbar from "./components/Nbar";
import About from "./components/About";
import Account from "./components/Account";
//import Chat from "./components/Chat";
import BinsMap from "./components/binsmap/BinsMap";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AdminDashboard from "./components/hidden/Admin_Dash";
import ContactUs from "./components/ContactUs";

//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="app">
        <Nbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="bins" element={<BinsMap />} />
            <Route path="account" element={<Account />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            {/* <Route path="admin/dashboard" Component={AdminDashboard} /> */}

            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
