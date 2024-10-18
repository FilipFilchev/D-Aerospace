import PropTypes from "prop-types";
import "./SystemDesign.css";

const SystemDesign = ({ className = "" }) => {
  return (
    <div className={`systemdesign ${className}`}>
      <img className="systemdesign-child" alt="" src="/rectangle-355.svg" />
      <div className="divelementor-widget-wrap2">
        <div className="heading-11" />
        <h1 className="system-design">System Design</h1>
        <div className="pelementor-image-box-descript1" />
      </div>
      <button className="button3">
        <div className="learn-more10">Learn More</div>
      </button>
      <div className="during-the-design">
        During the design of drone systems, their specific configuration is
        determined. Calculations of the main drone systems are performed. The
        feasibility of in-house production or external procurement of drone
        components is assessed, including an assessment of suppliers. From a
        marketing point of view, options for various options, additions or the
        creation of an entire product line are being considered.
      </div>
      <img className="m2-1-icon" loading="lazy" alt="" src="/m2-1@2x.png" />
    </div>
  );
};

SystemDesign.propTypes = {
  className: PropTypes.string,
};

export default SystemDesign;
