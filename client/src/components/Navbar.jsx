import { Link } from "react-router-dom";
import logo from "../assets/IMG_5725.jpg";

const navKeys = ["Calendar", "Last Orders", "Gallery"];
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="store-logo-name">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
        <div className="name">Bubble Paradise</div>
      </div>
      <div className="nav-keys">
        {navKeys.map((navKey, index) => (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.5em",
            }}
            to={navKey.toLowerCase().replace(" ", "-")}
            key={index}
          >
            {navKey}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
