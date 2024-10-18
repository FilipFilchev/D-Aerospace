import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", propTop, propLeft, minutes }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`rectangle-parent28 ${className}`} style={frameDiv2Style}>
      <div className="frame-child113" />
      <img className="logosflight-icon1" alt="" />
      <img className="flighttime-1-icon1" alt="" />
      <div className="max-flight-time1">Max Flight Time</div>
      <div className="minutes1">{minutes}</div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  minutes: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default FrameComponent;
