import React from "react";
import styles from "../style";

import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
