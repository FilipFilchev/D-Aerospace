import PropTypes from "prop-types";
import "./FAQ.css";

const FAQ = ({ className = "" }) => {
  return (
    <section className={`faq ${className}`}>
      <div className="faq-background" />
      <h1 className="faqs">FAQ’s</h1>
      <div className="key-questions-answered">{`Key Questions Answered `}</div>
      <div className="faq-items" />
      <div className="faq-items1" />
      <div className="faq-items2" />
      <div className="faq-items3" />
      <div className="faq-items4" />
      <img
        className="plus-svgrepo-com-1-icon"
        loading="lazy"
        alt=""
        src="/plussvgrepocom-1.svg"
      />
      <img
        className="plus-svgrepo-com-2-icon"
        loading="lazy"
        alt=""
        src="/plussvgrepocom-1.svg"
      />
      <img
        className="plus-svgrepo-com-3-icon"
        loading="lazy"
        alt=""
        src="/plussvgrepocom-1.svg"
      />
      <img
        className="plus-svgrepo-com-4-icon"
        loading="lazy"
        alt=""
        src="/plussvgrepocom-1.svg"
      />
      <img
        className="plus-svgrepo-com-5-icon"
        loading="lazy"
        alt=""
        src="/plussvgrepocom-1.svg"
      />
      <div className="could-you-outline">
        Could you outline the key components involved in the systems design
        stage of drone development?
      </div>
      <div className="what-types-of">
        What types of tests are conducted during the prototype testing phase of
        drone development?
      </div>
      <div className="what-is-the">
        What is the significance of concept development in the process of custom
        drone development, and what does it entail?
      </div>
      <div className="how-does-the">
        How does the team determine the target characteristics of a new drone
        product during concept development?
      </div>
      <div className="what-factors-are">
        What factors are considered during the economic analysis phase of drone
        development?
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
