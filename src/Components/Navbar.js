import { Link } from "react-router-dom";
import navStyles from "./navbar.module.css";

function Navbar(props) {
  return (
    <header className={navStyles.nav}>
      <img src="/Images/logo1.png" alt="" />
      <nav>
        {props.isLoggedIn ? (
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>

            <li>
              <Link to="/Cleaning"> Cleaning</Link>
            </li>
            <li>
              <Link to="/Money"> Money</Link>
            </li>
            <li>
              <Link to="/Furniture"> Furniture</Link>
            </li>

            <li>
              <Link to="/login"> Log Out</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/login"> Log In or Sign Up</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
