import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({
  className = "",
  propTop,
  propWidth,
  propWidth1,
  propWidth2,
  name1,
  phoneNumber,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
    };
  }, [propTop, propWidth]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv7Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={`rectangle-parent32 ${className}`} style={frameDiv6Style}>
      <div className="frame-child117" style={rectangleDivStyle} />
      <div className="name-parent" style={frameDiv7Style}>
        <div className="name">{name1}</div>
        <div className="phone-number">{phoneNumber}</div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  phoneNumber: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default FrameComponent4;
