import { feedback } from "../constants";
import styles from "../style";


const Activities = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40" />

    <div className="w-[50%] flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 px-10 relative z-[1]">
      <h2 className="font-poppins font-bold xs:text-[48px] text-[40px] text-secondary xs:leading-[76.8px] leading-[66.8px] w-full">
        WHAT WE CAN OFFER?
      </h2>
    
    </div>

    <div className="grid grid-cols-3 gap-8">
      <div
        className={`${styles.padding} sm:flex-row flex-col  w-[350px] h-[550px] font-poppins font-medium text-[18px] text-primary bg-orange-gradient rounded-[10px] outline-none`}
      >
        <h1
          className={`${styles.flexStart} font-poppins font-bold ss:text-[16px] text-[20px] text-white ss:leading-[100.8px] leading-[75px] w-full`}
        >
          PRE-EVENT ENGAGEMENT
        </h1>
        <p className={`${styles.flexStart} px-[10px] font-poppins font-medium ss:text-[12px] text-[20px] text-white w-full`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          provident molestias officia debitis facilis voluptas excepturi libero
          praesentium minus tempora temporibus saepe dignissimos cum, et ab
          harum ut placeat a. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Esse provident molestias officia debitis facilis
          voluptas excepturi libero praesentium minus tempora temporibus saepe
          dignissimos cum, et ab harum ut placeat a. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.
        </p>
      </div>

      <div
        className={`${styles.padding} sm:flex-row flex-col  w-[350px] h-[550px] font-poppins font-medium text-[18px] text-primary bg-orange-gradient rounded-[10px] outline-none`}
      >
        <h1
          className={`${styles.flexStart} font-poppins font-bold ss:text-[16px] text-[20px] text-white ss:leading-[100.8px] leading-[75px] w-full`}
        >
          PRE-EVENT ENGAGEMENT
        </h1>
        <p className={`${styles.flexStart} px-[10px] font-poppins font-medium ss:text-[12px] text-[20px] text-white w-full`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          provident molestias officia debitis facilis voluptas excepturi libero
          praesentium minus tempora temporibus saepe dignissimos cum, et ab
          harum ut placeat a. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Esse provident molestias officia debitis facilis
          voluptas excepturi libero praesentium minus tempora temporibus saepe
          dignissimos cum, et ab harum ut placeat a. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.
        </p>
      </div>

      <div
        className={`${styles.padding} sm:flex-row flex-col  w-[350px] h-[550px] font-poppins font-medium text-[18px] text-primary bg-orange-gradient rounded-[10px] outline-none`}
      >
        <h1
          className={`${styles.flexStart} font-poppins font-bold ss:text-[16px] text-[20px] text-white ss:leading-[100.8px] leading-[75px] w-full`}
        >
          PRE-EVENT ENGAGEMENT
        </h1>
        <p className={`${styles.flexStart} px-[10px] font-poppins font-medium ss:text-[12px] text-[20px] text-white w-full`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          provident molestias officia debitis facilis voluptas excepturi libero
          praesentium minus tempora temporibus saepe dignissimos cum, et ab
          harum ut placeat a. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Esse provident molestias officia debitis facilis
          voluptas excepturi libero praesentium minus tempora temporibus saepe
          dignissimos cum, et ab harum ut placeat a. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.
        </p>
      </div>
    </div>
  
  </section>
);

export default Activities;
