import PropTypes from "prop-types";
import "./NavSection2.css";

const NavSection2 = ({ className = "" }) => {
  return (
    <header className={`navsection2 ${className}`}>
      <div className="nav-background" />
      <button className="contact-link1">
        <a className="contact7" />
      </button>
      <div className="nav-links1">
        <div className="sectors-link">
          <a className="sectors6" />
          <img
            className="icon-arrow-circle-right1"
            alt=""
            src="/-icon-arrow-circle-right@2x.png"
          />
        </div>
        <div className="nav-link-items">
          <a className="sectors6" />
        </div>
        <div className="nav-link-items1">
          <a className="sectors6" />
        </div>
        <div className="nav-link-items1">
          <a className="sectors6" />
        </div>
        <div className="nav-link-items1">
          <a className="sectors6" />
        </div>
      </div>
      <img
        className="cropped-d-aerospace-logo-103x9-icon6"
        loading="lazy"
        alt=""
        src="/croppedd-aerospace-logo103x91-12@2x.png"
      />
    </header>
  );
};

NavSection2.propTypes = {
  className: PropTypes.string,
};

export default NavSection2;
