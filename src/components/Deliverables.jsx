import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-red-gradient`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-red text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Deliverables = () => (
  <section id="sponsership" className={layout.section}>
    <div className={`px-[5%] ${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        <span className="text-red uppercase text-[120%]">Deliverables</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        cumque esse, officiis, nobis reiciendis libero soluta dolor quaerat at
        in impedit veniam? Doloremque aliquam eveniet culpa accusamus
        necessitatibus non. Cum? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Provident cumque esse, officiis, nobis reiciendis
        libero soluta dolor quaerat at in impedit veniam? Doloremque aliquam
        eveniet culpa accusamus necessitatibus non. Cum?
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
