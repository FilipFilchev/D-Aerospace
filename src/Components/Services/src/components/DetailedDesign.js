import PropTypes from "prop-types";
import "./DetailedDesign.css";

const DetailedDesign = ({ className = "" }) => {
  return (
    <div className={`detaileddesign ${className}`}>
      <img className="detaileddesign-child" alt="" src="/rectangle-355.svg" />
      <div className="divelementor-widget-wrap4">
        <div className="heading-13">
          <img
            className="m31-1-icon"
            loading="lazy"
            alt=""
            src="/m31-1@2x.png"
          />
        </div>
        <h1 className="detailed-design">Detailed Design</h1>
        <div className="pelementor-image-box-descript3">
          <div className="during-detailed-design-container">
            <span className="during-detailed-design-container1">
              <p className="during-detailed-design">
                During detailed design, we work on each component of the drone
                to such depth that it can be fully manufactured.
              </p>
              <p className="during-detailed-design">
                Datasheets, specifications, and all dimensions are fully defined
                and documented. The detailed design data then becomes the source
                of information for the production of prototypes.
              </p>
            </span>
          </div>
        </div>
      </div>
      <button className="button5">
        <div className="learn-more12">Learn More</div>
      </button>
    </div>
  );
};

DetailedDesign.propTypes = {
  className: PropTypes.string,
};

export default DetailedDesign;
