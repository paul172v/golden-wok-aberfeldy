import { FaFacebook } from "react-icons/fa";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p className={classes.copyright}>© Golden Wok 2024</p>
      <a
        href="https://www.facebook.com/profile.php?id=61553648932085"
        target="_blank"
      >
        <FaFacebook className={classes.icon} />
      </a>
    </div>
  );
};

export default Footer;
