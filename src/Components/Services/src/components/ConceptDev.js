import PropTypes from "prop-types";
import "./ConceptDev.css";

const ConceptDev = ({ className = "" }) => {
  return (
    <div className={`conceptdev ${className}`}>
      <img className="conceptdev-child" alt="" src="/rectangle-355.svg" />
      <div className="divelementor-widget-wrap1">
        <div className="heading-1" />
        <h1 className="concept-development">Concept Development</h1>
        <div className="pelementor-image-box-descript">
          <div className="the-development-of">
            The development of high-quality concepts is extremely important. At
            this crucial stage, we identify the needs of the target market or
            application, analyze potential competitors and existing products,
            specify drone features and configurations, conduct a thorough
            economic assessment, and craft a strategic implementation timeline.
            This stage lays the foundation for the entire project.
          </div>
        </div>
      </div>
      <img className="m1-1-icon" loading="lazy" alt="" src="/m1-1@2x.png" />
      <button className="button2">
        <div className="learn-more9">Learn More</div>
      </button>
    </div>
  );
};

ConceptDev.propTypes = {
  className: PropTypes.string,
};

export default ConceptDev;
