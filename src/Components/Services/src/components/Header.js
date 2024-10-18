import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <section className={`header1 ${className}`}>
      <div className="bc470-7be3-4c55-bba1-c378d0700">
        <h1 className="main-article">Services</h1>
      </div>
      <div className="divelementor-element">
        <div className="button1">
          <div className="ask-us-well">Ask us, we'll build it</div>
        </div>
      </div>
      <div className="divelementor-widget-wrap">
        <div className="divelementor-image-box-conten">
          <h1 className="heading-1-container">
            <span className="heading-1-container1">
              <p className="we-make-things">We make things</p>
              <p className="we-make-things">personal.</p>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
