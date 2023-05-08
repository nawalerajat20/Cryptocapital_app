import React from "react";
import styles from "../style";

import {
  Speakers,
  Ted,
  Tedx,
  Tedxdyp,
  Deliverables,
  Attend,
  Chapter,
  Insights,
  Stats,
  Theme,
  Hero,
  Transending,
  Activities,
  Packages,
  Client,
  Timeline,
  // ExploreMore,
} from "../components";

const MainPage = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-dimRed ${styles.flexStart}`}>
        <div className={`flex-1 ${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>

      <div className={`bg-reds-gradient ${styles.flexStart}`}>
        <div className={`flex ${styles.boxWidth}`}>
          <Ted />
        </div>
      </div>
      <div className={`bg-reds-gradient ${styles.flexStart}`}>
        <div className={`flex ${styles.boxWidth}`}>
          <Tedx />
        </div>
      </div>
      <div className={`bg-reds-gradient ${styles.flexStart}`}>
        <div className={`flex ${styles.boxWidth}`}>
          <Tedxdyp />
        </div>
      </div>
      <div className={`bg-reds-gradient ${styles.flexStart}`}>
        <div className={`flex ${styles.boxWidth}`}>
          <Chapter />
        </div>
      </div>
      <div className={`bg-reds-gradient ${styles.flexStart}`}>
        <Theme />
      </div>
      <div className={`bg-secondary ${styles.flexStart}`}>
        <Transending />
      </div>
      <div className={`bg-grey ${styles.flexStart}`}>
        <Speakers />
      </div>

      <div className={`bg-dimBlue ${styles.flexStart}`}>
        <Attend />
      </div>
      <div className={`bg-black ${styles.flexStart}`}>
        <Insights />
      </div>

      <div className={`bg-reds-gradient ${styles.flexStart}`}>
        <div className={`flex ${styles.boxWidth}`}>
          <Timeline />
        </div>
      </div>

      <div className={`bg-reds-gradient ${styles.flexStart}`}>
        <div className={`flex ${styles.boxWidth}`}>
          <Deliverables />
        </div>
      </div>

      <div className={`bg-dimBlue ${styles.flexStart}`}>
        <div className="flex sm:max-w-[1000px] w-full">
          <Activities />
        </div>
      </div>
      <div className={`bg-dimBlue ${styles.flexStart}`}>
        <Packages />
      </div>
      <div className={`bg-red-gradient ${styles.flexStart}`}>
        <Client />
      </div>
    </>
  );
};

export default MainPage;
