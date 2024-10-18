import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", propTop, propLeft }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`rectangle-parent29 ${className}`} style={frameDiv3Style}>
      <div className="frame-child114" />
      <img className="logosflight-icon2" alt="" />
      <div className="operating-range">Operating Range</div>
      <div className="km">20 km</div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default FrameComponent2;
