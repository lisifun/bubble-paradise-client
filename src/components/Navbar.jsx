import { Link } from "react-router-dom";
import logo from "../assets/IMG_5725.jpg";

const navKeys = [
  { name: "New Order", link: "/grooming" },
  { name: "Last Orders", link: "/last-orders" },
];
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="store-logo-name">
        <Link to="/" style={{ color: "white" }}>
          <img className="logo" src={logo} />
        </Link>
        <div className="name">Bubble Paradise</div>
      </div>
      <div className="nav-keys">
        {navKeys.map((navKey, index) => (
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.5em",
            }}
            to={navKey.link}
            key={index}
          >
            {navKey.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
