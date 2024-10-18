import PropTypes from "prop-types";
import "./HeaderContainer.css";

const HeaderContainer = ({ className = "" }) => {
  return (
    <div className={`header-container ${className}`}>
      <div className="header">
        <img className="icon" alt="" src="/9-79025@2x.png" />
        <div className="button-9250965440d500c05f55b" />
        <div className="button-link-button">
          <div className="salvatore3">Right for your needs</div>
          <div className="watch-video">Watch Video</div>
          <div className="video-player">
            <img
              className="divstyle-video-play-3elhn-icon"
              loading="lazy"
              alt=""
              src="/divstyle--videoplay---3elhn.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderContainer.propTypes = {
  className: PropTypes.string,
};

export default HeaderContainer;
