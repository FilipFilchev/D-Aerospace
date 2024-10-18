import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", propTop, propLeft }) => {
  const frameDiv5Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`rectangle-parent31 ${className}`} style={frameDiv5Style}>
      <div className="frame-child116" />
      <img className="vector-icon7" alt="" />
      <img className="group-icon6" alt="" />
      <div className="flight-controller2">Flight Controller</div>
      <div className="smart3">Smart</div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default FrameComponent1;
