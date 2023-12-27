import React from "react";
import styles from "../style";

import Main from "../components/Main";
import Description from "../components/Description";
import Authorization from "../components/Authorization";
import Process from "../components/Process";
import Services from "../components/Services";

const Cryptocurrency = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Main />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Description />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
        </div>
      </div>
      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Authorization />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Process />
        </div>
      </div>
    </>
  );
};

export default Cryptocurrency;
