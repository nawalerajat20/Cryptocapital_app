import React from "react";
import styles from "../style";

import Predict from "../components/Predict";

const ReportFeature = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Predict />
        </div>
      </div>
    </>
  );
};

export default ReportFeature;
