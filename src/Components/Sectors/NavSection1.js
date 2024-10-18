import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./NavSection1.css";

const NavSection1 = ({ className = "" }) => {
  return (
    <header className={`navsection1 ${className}`}>
      <div className="navsection-item" />
      <img
        className="cropped-d-aerospace-logo-103x9-icon5"
        loading="lazy"
        alt=""
        src="/croppedd-aerospace-logo103x91-11@2x.png"
      />
      <div className="nav-links">
        <div className="links">
          <div className="link-item">
            <Form.Select className="link-wrapper-formselect" />
          </div>
          <div className="products-services">
            <div className="products-services-labels">
              <a className="products6">Products</a>
            </div>
            <div className="products-services-labels1">
              <a className="services4">Services</a>
            </div>
          </div>
          <div className="link-item">
            <div className="resource-label">
              <a className="resource-library2">Resource Library</a>
            </div>
          </div>
          <div className="resource-label">
            <a className="resource-library2">
              <span>About</span>
              <span className="span4">{` `}</span>
            </a>
          </div>
          <div className="contact5">
            <a className="resource-library2">
              <span>Contact</span>
              <span className="span4">{` `}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

NavSection1.propTypes = {
  className: PropTypes.string,
};

export default NavSection1;
