import { F1 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Main = () => (
  <section className={` ${layout.section} ml-[5rem] mr-[5rem] mt-[5rem]`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We are awesome <br className="sm:block hidden" /> team for your{" "}
        <br className="sm:block hidden" /> investment plans
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We're the crypto prediction engine designed to empower your investment decisions.  Our team of experts analyzes market trends and leverages cutting-edge technology to illuminate the path of your crypto journey. Join us and navigate the ever-evolving landscape with confidence.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={F1} alt="image" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Main;
