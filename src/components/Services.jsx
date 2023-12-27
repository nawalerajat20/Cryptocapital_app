import { services } from "../constants";
import styles from "../style";

const Box = ({ icon, title, content }) => (
  <div
    className="flex justify-between flex-col max-w-[320px] bg-white md:mr-10 sm:mr-5 mr-0 my-5"
    style={{
      boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "20px",
      marginRight: "60px",
    }}
  >
    <div className="flex flex-row">
      <div
        className="w-[500px] h-[230px] mt-[15px] overflow-hidden"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <img src={icon} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col mb-4"></div>
    </div>
    <h4 className="font-poppins font-semibold text-left text-[22px] px-5 mb-[-2rem] leading-[32px] px-[0.5rem] py-[2rem] text-black">
      {title}
    </h4>
    {/* <div className="w-full h-[2px] bg-black mt-[8px]"></div> */}
    <p className="font-poppins font-normal text-justify text-[13px] px-[0.5rem] px-5 py-5 mb-10 py-[1rem] leading-[24px] text-dimWhite">
      {content}
    </p>
  </div>
);

const Services = () => (
  <section
    id="aboutinfo"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    style={{ textAlign: "center" }}
  >
    <div className="w-full flex px-[100px] py-[20px] ml-[-35rem] bg-white justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <div className="text-left">
        <h2 className="text-black uppercase mb-3 text-base md:text-lg font-bold uppercase relative">
          <span className="relative z-10 ml-[60px]">our services</span>
          <span className="absolute top-3 left-0 w-[50px] h-[2px] bg-black"></span>
        </h2>
        <h2 className={`${styles.heading2} relative`}>
          <span className="relative z-10">
           We offer a wide range of
            <br className="sm:block hidden" /> crypto services
          </span>
          <span className="absolute top-[7.5rem] left-[400px] w-[80px] h-[2px] bg-black"></span>
        </h2>
      </div>
    </div>
    <div className="flex justify-between">
      {services.map((feature, index) => (
        <Box key={index} {...feature} />
      ))}
    </div>
  </section>
);

export default Services;
