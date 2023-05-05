import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-reds-gradient`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-secondary text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Deliverables = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h1 className="flex-1 font-poppins font-semibold text-gray ss:text-[72px] text-[52px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
        <span className="font-bold text-secondary">DELIVERABLES</span>
      </h1>
      <p className={`${styles.paragraph} max-w-[700px] flex-1 mt-5`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio commodi
        incidunt odio ducimus sed amet pariatur qui! Quaerat quas rem asperiores
        magnam aliquam saepe quasi repudiandae expedita, nesciunt quod. Unde.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Deliverables;
