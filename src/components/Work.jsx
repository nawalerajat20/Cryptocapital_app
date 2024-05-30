import styles from "../style";

const Work = () => (
  <section
    id="aboutinfo"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    style={{ textAlign: "center" }} // Align the section content to center
  >
    <div className="w-full uppercase flex px-[100px] py-[20px] bg-white justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>WHAT WE DO?</h2>
    </div>

    <div className="flex justify-center ml-20 mr-20">
      {" "}
      {/* Adjust left and right margin for gap */}
      <div className="flex gap-6 items-center">
        {" "}
        {/* Decrease gap between boxes */}
        {/* Box 1 */}
        <div className="bg-dimBlue w-98 p-14 h-64 flex flex-col justify-center items-center text-center">
          {" "}
          {/* Adjust dimensions */}
          <h3 className="text-white mb-3 text-base md:text-lg font-bold">
            OUR MISSION
          </h3>{" "}
          {/* Increase text size and make it bold */}
          <p className="text-white text-justify text-sm md:text-xs">
            {" "}
            {/* Decrease text size */}
            To empower individuals and businesses with the knowledge and tools
            they need to navigate the dynamic world of blockchain technology and
            digital assets. We strive to be a independent platform, providing
            users with reliable information on next generation web (Web3).
          </p>
        </div>
        {/* Box 2 */}
        <div className="bg-black w-98 p-14 h-64 flex flex-col justify-center items-center text-center">
          {" "}
          {/* Adjust dimensions */}
          <h3 className="text-white mb-3 text-base md:text-lg font-bold">
            OUR VISION
          </h3>{" "}
          {/* Increase text size and make it bold */}
          <p className="text-white text-justify text-sm md:text-xs">
            {" "}
            {/* Decrease text size */}
            We envision a future where blockchain technology and
            cryptocurrencies are seamlessly integrated into our financial
            systems and daily lives. CryptoCapital aims to be at the forefront
            of this revolution, fostering widespread adoption and responsible
            participation in the cryptosphere.
          </p>
        </div>
        {/* Box 3 */}
        <div className="bg-dimBlue w-98 p-14 h-64 flex flex-col justify-center items-center text-center">
          {" "}
          {/* Adjust dimensions */}
          <h3 className="text-white mb-3 text-base md:text-lg font-bold">
            OUR VALUE
          </h3>{" "}
          {/* Increase text size and make it bold */}
          <p className="text-white text-justify text-sm md:text-xs">
            {" "}
            {/* Decrease text size */}
            We prioritize the use of reliable data and rigorous analysis to
            ensure the accuracy of our predictions and insights. We believe in
            open communication and providing users with unbiased information. We
            believe everyone deserves the opportunity to participate in the
            crypto revolution.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Work;
