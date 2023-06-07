import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Savey from "./Survey";
import HomePage from "./HomePage";
import Report from "./Report";
import "./Navbar.css";
import {
  AiOutlineHome,
  AiOutlineForm,
  AiOutlineFileDone,
} from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";

const NavBar = (props) => {
  const { onLogout } = props;

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <AiOutlineHome size={25} /> Home
            </Link>
          </li>
          <li>
            <Link to="/survey">
              <AiOutlineForm size={25} /> Survey
            </Link>
          </li>
          <li>
            <Link to="/report">
              <AiOutlineFileDone size={25} /> Survey Report
            </Link>
          </li>
          <li>
            <label className="Logout">
              <RiLogoutBoxRLine size={25} onClick={onLogout} />
              Logout
            </label>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/survey" element={<Savey />} />
        <Route path="/report" element={<Report />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
