import React from "react";
import styles from "../style";

import { Login } from "../components";

const Loginpage = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Login />
        </div>
      </div>
    </>
  );
};

export default Loginpage;
