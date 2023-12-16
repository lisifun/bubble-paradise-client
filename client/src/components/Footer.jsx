import logo from "../assets/IMG_5725.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-logo-name">
          <img src={logo} />
          <p>Bubble Paradise</p>
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/lisandra-fundora-300675290/"
            target="-blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/lisifun" target="-blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="footer-right">
        <h2>About</h2>
        <p>
          <i className="fas fa-map-marker-alt"></i> 656 E Farmer Leo Ct, Sandy,
          UT 84070
        </p>
        <p>
          <i className="fas fa-phone"></i> (425)546-6197
        </p>
        <p>
          <i className="fas fa-clock"></i> Mon - Sun: 8AM - 6PM
        </p>
      </div>
    </div>
  );
};

export default Footer;
