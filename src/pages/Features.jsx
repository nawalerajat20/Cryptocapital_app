import React from "react";
import styles from "../style";

import {
  Speakers,
} from "../components";
import Work from "../components/Work";
import AboutUs from "../components/AboutUs";

const Features = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutUs />
      </div>
    </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`flex ${styles.boxWidth}`}>
          <Work />
        </div>
      </div>
      <div className={`bg-grey ${styles.flexStart}`}>
        <Speakers />
      </div>
    </>
  );
};

export default Features;
