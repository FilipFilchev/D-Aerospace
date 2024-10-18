import PropTypes from "prop-types";
import "./Prototypes.css";

const Prototypes = ({ className = "" }) => {
  return (
    <section className={`prototypes ${className}`}>
      <img className="prototypes-child" alt="" src="/rectangle-355-2.svg" />
      <div className="divelementor-widget-wrap3">
        <div className="heading-12" />
        <h1 className="prototypes-and-testing">Prototypes and testing</h1>
        <div className="pelementor-image-box-descript2" />
      </div>
      <button className="button4">
        <div className="learn-more11">Learn More</div>
      </button>
      <img className="m3-2-icon" loading="lazy" alt="" src="/m3-2@2x.png" />
      <div className="for-the-testing-container">
        <span className="for-the-testing-container1">
          <p className="for-the-testing">
            For the testing phase, several prototypes are usually made.
          </p>
          <p className="the-purpose-of">
            The purpose of prototype testing is to verify the drone's
            performance and behavior against specifications and to identify
            areas for improvement based on first real-world use.
          </p>
        </span>
      </div>
    </section>
  );
};

Prototypes.propTypes = {
  className: PropTypes.string,
};

export default Prototypes;
