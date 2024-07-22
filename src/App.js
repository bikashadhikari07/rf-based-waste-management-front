//from react
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

//comp
import Nbar from "./components/Nbar";
import About from "./components/About";
import Account from "./components/Account";
//import Chat from "./components/Chat";
import BinsMap from "./components/binsmap/BinsMap";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AdminDashboard from "./components/hidden/Admin_Dash";

//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <>
        <Nbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bins" element={<BinsMap />} />
          <Route path="account" element={<Account />} />
          <Route path="admin/dashboard" Component={AdminDashboard} />

          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </>
    </>
  );
}

export default App;
