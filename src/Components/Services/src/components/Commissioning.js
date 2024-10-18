import PropTypes from "prop-types";
import "./Commissioning.css";

const Commissioning = ({ className = "" }) => {
  return (
    <div className={`commissioning ${className}`}>
      <img className="commissioning-child" alt="" src="/rectangle-355.svg" />
      <div className="divelementor-widget-wrap5">
        <div className="heading-14" />
        <h1 className="commissioning-of-production">{`Commissioning of production `}</h1>
        <div className="pelementor-image-box-descript4">
          <div className="production-processes-and">
            Production processes and production equipment are fine-tuned during
            commissioning. Specific technological operations are being
            developed, and production personnel are trained during the
            production of the first drone samples.
          </div>
        </div>
      </div>
      <button className="button6">
        <div className="learn-more13">Learn More</div>
      </button>
      <img className="m4-1-icon" loading="lazy" alt="" src="/m4-1@2x.png" />
    </div>
  );
};

Commissioning.propTypes = {
  className: PropTypes.string,
};

export default Commissioning;
