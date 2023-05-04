import { tedxdyp } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section
    id="product"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div className={layout.sectionImgReverse}>
      <img
        src={tedxdyp}
        alt="billing"
        className="w-[80%] h-[60%] relative z-[5]"
      />
    </div>

    <div className={layout.sectionInfo}>
      <h1 className="flex-1 font-poppins font-semibold text-secondary ss:text-[72px] text-[52px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
        About TEDxDYPAkurdi
      </h1>
      <p className={`${styles.paragraph} max-w-[500px] mt-6 mb-12`}>
        Our event is called TEDxDYPAkurdi, TEDx is a programme of regional,
        independently organised events that brings people together to have a
        TED-like experience in the spirit of ideas worth spreading. Here at
        TEDxDYPAkurdi, we have an energetic and exciting team that is also
        likely to be creative and innovative, to have TEDTalks video and live
        speakers combined at a TEDx event to foster in-depth conversation and
        connection. <br />
        <br />
        TEDxDYPAkurdi is an independently organized TEDx event hosted by Dr. D Y
        Patil Educational Complex, Pune. The latest edition of TEDxDYPAkurdi was
        held on 23rd May 2022. The theme of the event was “UNIVOCAL”, where
        speakers from diverse backgrounds explored groundbreaking ideas that
        could reshape tomorrow's landscape.
      </p>
    </div>
  </section>
);

export default Billing;
