import PropTypes from "prop-types";
import "./FooterSection1.css";

const FooterSection1 = ({ className = "" }) => {
  return (
    <footer className={`footersection2 ${className}`}>
      <div className="footer-top-border" />
      <img
        className="cropped-d-aerospace-logo-103x9-icon7"
        loading="lazy"
        alt=""
        src="/croppedd-aerospace-logo103x91-21@2x.png"
      />
      <div className="social-media-links">
        <div className="social-media-link-items">
          <div className="social-media-icons" />
          <img
            className="instagram-logo-icon2"
            loading="lazy"
            alt=""
            src="/instagram-logo1.svg"
          />
        </div>
        <div className="social-media-link-items1">
          <div className="social-media-icons" />
          <img
            className="linkedin-logo-icon2"
            loading="lazy"
            alt=""
            src="/linkedin-logo1.svg"
          />
        </div>
        <div className="social-media-link-items2">
          <div className="social-media-icons" />
          <img
            className="twitter-logo-icon2"
            loading="lazy"
            alt=""
            src="/twitter-logo1.svg"
          />
        </div>
        <div className="social-media-link-items3">
          <div className="social-media-icons" />
          <img
            className="facebook-logo-icon2"
            loading="lazy"
            alt=""
            src="/facebook-logo1.svg"
          />
        </div>
      </div>
      <b className="pages3">Pages</b>
      <b className="general4">General</b>
      <div className="home-pricing-blog-container3">
        <p className="home4">Home</p>
        <p className="home4">Pricing</p>
        <p className="home4">Blog</p>
        <p className="demo3">Demo</p>
      </div>
      <div className="get-started-about9">{`GET STARTED ABOUT US CONTACT US COMPONENTS AUTHORIZED DEALERS `}</div>
      <div className="footer-links2">
        <b className="general5">General</b>
        <div className="get-started-about10">{`GET STARTED ABOUT US CONTACT US COMPONENTS AUTHORIZED DEALERS `}</div>
      </div>
      <div className="footer-links3">
        <b className="general5">General</b>
        <div className="get-started-about10">{`GET STARTED ABOUT US CONTACT US COMPONENTS AUTHORIZED DEALERS `}</div>
      </div>
      <b className="products8">Products</b>
      <div className="salvador-azrial3">
        <p className="home4">Salvador</p>
        <p className="demo3">Azrial</p>
      </div>
      <b className="contact8">Contact</b>
      <div className="footer-links4">(406) 555-0120</div>
      <div className="mangcoding123gmailcom3">mangcoding123@gmail.com</div>
      <div className="westheimer-rd-santa3">{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}</div>
      <img
        className="footer-links-icon"
        loading="lazy"
        alt=""
        src="/frame-1@2x.png"
      />
      <div className="footer-links5" />
      <img
        className="footer-links-icon1"
        loading="lazy"
        alt=""
        src="/frame-32.svg"
      />
      <img
        className="footer-links5"
        loading="lazy"
        alt=""
        src="/dashiconsemail2.svg"
      />
    </footer>
  );
};

FooterSection1.propTypes = {
  className: PropTypes.string,
};

export default FooterSection1;
