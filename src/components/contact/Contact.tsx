import { FaPhone } from "react-icons/fa";
import classes from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={classes["contact-info-wrapper"]}>
      <div className="u-row">
        <a className={classes["link-purple"]} href="tel:+441887224425">
          Call Us: +44 1887 224 425
        </a>
        <FaPhone className={classes.icon} />
      </div>

      <div className="u-row">
        <a className={classes["link-purple"]} href="tel:+447888771133">
          Customer Service Line: +44 7888 771 133
        </a>
        <FaPhone className={classes.icon} />
      </div>

      <p className={classes.notice}>We accept cash only!</p>

      <p className={classes.request}>
        Please have your order ready before calling and report to the counter
        upon arrival for collection
      </p>

      <p className={classes["allergen-warning"]}>
        Please inform us if you have any food allergies
      </p>

      <div className={classes["opening-hours-wrapper"]}>
        <p className={classes["opening-hours--bold"]}>Open 6 days</p>
        <p className={classes["opening-hours--white"]}>Wednesday - Monday</p>
        <p className={classes["opening-hours--white"]}>16:00 - 22:00</p>
        <p className={classes["opening-hours--yellow"]}>Closed - Tuesday</p>
        <p className={classes["opening-hours--address"]}>31 Dunkeld Street</p>
        <p className={classes["opening-hours--address"]}>Aberfeldy</p>
        <p className={classes["opening-hours--address"]}>PH15 2AF</p>
      </div>
    </div>
  );
};

export default Contact;
