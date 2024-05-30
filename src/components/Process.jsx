import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div className={`w-[100px] h-[100px] mt-[10px]  ${styles.flexCenter}`}>
      <img
        src={icon}
        alt="numbers"
        className="w-[70%] h-[70%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-row p-[20px] ml-10 mr-10">
      <div className="flex-1 flex flex-col">
        <h4 className="font-poppins font-bold text-black text-left mt-[30px] ml-[-40px] text-[30px] leading-[23.4px] mb-1">
          {title}
        </h4>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="font-poppins font-normal text-justify text-black text-[12px] max-w-[600px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  </div>
);

const Process = () => (
  <section
    id="aboutinfo"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    style={{ textAlign: "center" }}
  >
    <div className="w-full flex px-[100px] py-[20px] ml-[-43rem] bg-white justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <div className="text-left">
        <h2 className="text-black uppercase mb-3 text-base md:text-lg font-bold uppercase relative">
          <span className="relative z-10 ml-[60px]">our process</span>
          <span className="absolute top-3 left-0 w-[50px] h-[2px] bg-black"></span>
        </h2>
        <h2 className={`${styles.heading2} relative`}>
          <span className="relative z-10">
            A simple, yet effective
            <br className="sm:block hidden" /> three step process
          </span>
          <span className="absolute top-[7.5rem] left-[470px] w-[80px] h-[2px] bg-black"></span>
        </h2>
      </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Process;
