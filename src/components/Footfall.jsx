import { dummy } from "../assets";
import styles, { layout } from "../style";

const Footfall = () => (
  <section
    id="product"
    className={`flex md:flex-row flex-col ${styles.paddingY} `}
  >
    <div className={layout.sectionInfo}>
      <h1 className="flex-1 font-poppins font-semibold text-gray ss:text-[72px] text-[52px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
        <span className="font-bold text-dimBlack">WHY</span> US? <br />{" "}
        <span className="text-[60px] text-secondary">PREVIOUS WORK</span>
      </h1>
      <p className={`${styles.paragraph} justyfy-center flex-1 max-w-[700px]  `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        nostrum? Perspiciatis iusto quis atque amet quae, error rem animi. Eos
        soluta sit, expedita non beatae recusandae libero mollitia deserunt aut.
      </p>
    </div>

    <div className={layout.sectionImgReverse}>
      <img
        src={dummy}
        alt="dummy"
        className="w-[70%] h-[90%]  left-20 relative z-[5]"
      />
    </div>
  </section>
);

export default Footfall;
