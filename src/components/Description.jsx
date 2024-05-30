import styles from "../style";
import Button from "./Button";
import { F2 } from "../assets";
import { layout } from "../style";

const Description = () => (
  <section
    id="aboutinfo"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    style={{ textAlign: "center" }}
  >
    <div className="w-full flex px-[100px] py-[20px] bg-white justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <div className="text-center">
        <h2 className={styles.heading2}>
          Why we are trusted over the <br className="sm:block hidden" /> world
          in the crypto market
        </h2>
        <p className="text-black text-center mt-[2rem]  max-w-[700px] md:text-xs">
          In the ever-changing world of cryptocurrency, trust is paramount.
          CryptoCapital stands out as a reliable partner for your crypto
          journey. Our predictions are built on a foundation of cutting-edge
          analysis, unwavering independence, and a deep understanding of the
          evolving market landscape.
        </p>
      </div>
    </div>

    <div className="flex justify-center ml-20 mr-20">
      <div className="flex items-center">
        <div className="bg-lightBlue w-90 p-40 h-90 flex flex-col justify-center items-center text-center">
          {/* Adjust width and height to create a square appearance */}
          <h3 className="text-black mb-3 text-base md:text-lg font-bold">
            Optimize and scale, easy to start{" "}
          </h3>
          <p className="text-white text-justify text-sm md:text-xs">
            CryptoCapital is designed for effortless exploration. Start
            navigating the crypto world with a user-friendly platform that
            delivers powerful insights.Our focus on scalability ensures the
            platform grows alongside.
          </p>
          <Button styles={`mt-10`} />
        </div>
        <div className="bg-black w-90 p-40 h-90 flex flex-col justify-center items-center text-center">
          <div className={layout.sectionImg}>
            <img src={F2} alt="image" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Description;
