import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  propTop,
  propLeft,
  propLeft1,
  propLeft2,
  kg,
  propLeft3,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const maxPayloadCapabilityContainerStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const kg1Style = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  return (
    <div className={`rectangle-parent30 ${className}`} style={frameDiv4Style}>
      <div className="frame-child115" />
      <img className="group-icon5" alt="" />
      <img className="vector-icon6" alt="" style={vectorIconStyle} />
      <div
        className="max-payload-capability-container1"
        style={maxPayloadCapabilityContainerStyle}
      >
        <p className="max-payload1">{`Max Payload `}</p>
        <p className="max-payload1">Capability</p>
      </div>
      <div className="kg3" style={kg1Style}>
        {kg}
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  kg: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propLeft1: PropTypes.any,
  propLeft2: PropTypes.any,
  propLeft3: PropTypes.any,
};

export default FrameComponent3;
