import PropTypes from "prop-types";
import "./ContactForm.css";

const ContactForm = ({ className = "" }) => {
  return (
    <section className={`contactform ${className}`}>
      <div className="join-party">
        <div className="join-the-party1">{`Join the party `}</div>
        <div className="div2">🎉</div>
      </div>
      <div className="contact-form-fields">
        <input className="name-field" type="text" />
        <input className="email-field" type="text" />
        <div className="name1">Name</div>
        <div className="phone-number1">Phone Number</div>
      </div>
      <div className="contact-form-fields1">
        <input className="contact-form-fields-child" type="text" />
        <input className="contact-form-fields-item" type="text" />
        <div className="email1">Email</div>
        <div className="country">Country</div>
      </div>
      <textarea
        className="message-field"
        placeholder="Message"
        rows={9}
        cols={47}
      />
      <h2 className="contact-us1">Contact Us</h2>
      <div className="lets-talk-you-can-container1">
        <p className="lets-talk1">
          <b>Let's talk!</b>
        </p>
        <p className="lets-talk1">{`You can drop in your details to connect & request a demo`}</p>
      </div>
    </section>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
