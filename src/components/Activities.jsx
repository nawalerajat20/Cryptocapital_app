import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } rounded-[8px] bg-white outline`}
  >
    <div
      className={`w-[300px] h-[300px]  ${styles.flexCenter} bg-red-gradient`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col px-[20px] py-[20px] bg-white ml-3">
      <h4 className="font-poppins font-semibold text-red text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Activities = () => (
  <section id="sponsership" className={layout.section}>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Activities;
