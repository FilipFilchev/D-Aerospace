import PropTypes from "prop-types";
import "./SectorBody.css";

const SectorBody = ({ className = "" }) => {
  return (
    <div className={`sectorbody ${className}`}>
      <div className="divnectar-fancy-box">
        <div className="divbox-bg">
          <div className="before" />
          <div className="heading-29">{`Surveillance `}</div>
        </div>
      </div>
      <div className="divnectar-fancy-box1">
        <div className="divbox-bg1">
          <div className="before-parent">
            <div className="before1" />
            <div className="heading-210">Agriculture</div>
          </div>
        </div>
      </div>
      <div className="divnectar-fancy-box">
        <div className="divbox-bg2">
          <div className="before-group">
            <div className="before2" />
            <div className="heading-211">{`Utilities & Power`}</div>
          </div>
        </div>
      </div>
      <div className="divnectar-fancy-box">
        <div className="divbox-bg3">
          <div className="before3" />
          <div className="heading-212">Infrastructure</div>
        </div>
      </div>
      <div className="divnectar-fancy-box4">
        <div className="divbox-bg4">
          <div className="before-container">
            <div className="before4" />
            <div className="heading-210">{`Defence `}</div>
          </div>
        </div>
      </div>
      <div className="divnectar-fancy-box">
        <div className="divbox-bg5">
          <div className="before-parent1">
            <div className="before5" />
            <div className="heading-214">{`Research & Education`}</div>
          </div>
        </div>
      </div>
      <div className="divnectar-fancy-box">
        <div className="divbox-bg6">
          <div className="before6" />
          <div className="heading-215">{`Oil & Gas`}</div>
        </div>
      </div>
      <div className="divnectar-fancy-box">
        <div className="divbox-bg7">
          <div className="before-parent2">
            <div className="before7" />
            <div className="heading-216">Public Safety</div>
          </div>
        </div>
      </div>
      <div className="divnectar-fancy-box">
        <div className="divbox-bg8">
          <div className="before-parent3">
            <div className="before8" />
            <div className="heading-217">{`Mining & Aggregates`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectorBody.propTypes = {
  className: PropTypes.string,
};

export default SectorBody;
