import { F3 } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={F3} alt="billing" className="w-[70%] h-[90%] relative z-[5]" />
    </div>

    <div className={`${layout.sectionInfo} text-white`}>
      <h2 className="text-white mb-3 text-base md:text-lg font-bold uppercase relative">
        <span className="relative z-10 ml-[60px]">Authorization</span>
        <span className="absolute top-3 left-0 w-[50px] h-[2px] bg-white"></span>
      </h2>
      <h2 className={`${styles.heading2} relative`}>
        <span className="relative z-10">
          Share the features that
          <br className="sm:block hidden" /> help your customers
        </span>
        <span className="absolute top-[7.5rem] left-[530px] w-[70px] h-[2px] bg-white"></span>
      </h2>
      <p
        className={`${styles.paragraph} text-justify justify-center  max-w-[600px] mt-5`}
        style={{
          paddingBottom: "20px",
          marginBottom: "20px",
          borderBottom: "1px solid #FFF",
        }}
      >
        CryptoCapital equips you to conquer the ever-changing world of crypto
        investments. Our platform utilizes cutting-edge technology to deliver
        market forecasts you can rely on. We translate complex trends into clear
        insights, empowering you to make informed decisions.
      </p>
      <h2 className={styles.heading3}>Documentation</h2>
      <p
        className={`${styles.paragraph} text-justify justify-center max-w-[600px]`}
        style={{
          paddingBottom: "20px",
          marginBottom: "20px",
          borderBottom: "1px solid #FFF",
        }}
      >
        A comprehensive user guide is available to help you navigate the full
        potential of CryptoCapital. Don't hesitate to explore the documentation
        and unlock the power of informed crypto investing!
      </p>
      <h2 className={styles.heading3}>Customers</h2>
      <p
        className={`${styles.paragraph} text-justify justify-center max-w-[600px]`}
        style={{
          paddingBottom: "20px",
          marginBottom: "20px",
          borderBottom: "1px solid #FFF",
        }}
      >
        CryptoCapital caters to a diverse range of customers, from seasoned
        crypto investors seeking a competitive edge to curious newcomers eager
        to explore the digital asset landscape.
      </p>
    </div>
  </section>
);

export default Billing;
