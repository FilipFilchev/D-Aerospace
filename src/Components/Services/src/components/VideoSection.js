import PropTypes from "prop-types";
import "./VideoSection.css";

const VideoSection = ({ className = "" }) => {
  return (
    <div className={`videosection ${className}`}>
      <img
        className="firefly-mobile-1-icon"
        alt=""
        src="/fireflymobile-1@2x.png"
      />
      <img
        className="cyberone-mobile-1-icon"
        alt=""
        src="/cyberonemobile-1@2x.png"
      />
      <div className="viber-image-2024-02-25-23-31-2-parent">
        <img
          className="viber-image-2024-02-25-23-31-2-icon"
          alt=""
          src="/viber-image-20240225-233129517-1@2x.png"
        />
        <img
          className="arrow-increase-svgrepo-com-1-icon"
          alt=""
          src="/arrowincreasesvgrepocom-1.svg"
        />
      </div>
      <div className="cropped-d-aerospace-logo-103x9" />
      <img className="logonobgn-1-icon" alt="" src="/logonobgn-1@2x.png" />
      <div className="videosection-inner">
        <div className="d-aerospace-parent">
          <div className="d-aerospace">D Aerospace</div>
          <div className="giving-you-freedom-to-fly-high-wrapper">
            <div className="giving-you-freedom1">{`Giving you freedom to fly higher `}</div>
          </div>
        </div>
      </div>
      <div className="vector-group">
        <img className="vector-icon4" alt="" src="/vector-1.svg" />
        <img className="vector-icon5" alt="" src="/shape.svg" />
      </div>
    </div>
  );
};

VideoSection.propTypes = {
  className: PropTypes.string,
};

export default VideoSection;
