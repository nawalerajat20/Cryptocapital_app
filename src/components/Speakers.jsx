import { feedback } from "../constants";
import styles from "../style";

const Speakers = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2
        className={`${styles.heading2} font-poppins font-extrabold ss:text-[60px] text-[40px] text-dimBlack ss:leading-[90px] leading-[75px]`}
      >
        2023 LINE UP <br />{" "}
        <span className="text-secondary"> 20+ SPEAKERS</span>
      </h2>

      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[500px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          ratione sapiente neque ab atque qui excepturi. Illum autem facilis
          consequuntur alias quaerat sapiente dolorem, possimus eaque molestiae,
          earum vero ab. Illum autem facilis consequuntur alias quaerat sapiente
          dolorem, possimus eaque molestiae, earum vero ab.
        </p>
      </div>
      
    </div>

    <div className="flex flex-row items-center py-[6px] px-4 bg-black-gradient-2 rounded-[10px] mb-2">
          <p className={`${styles.paragraph} `}>
            <span className="text-white">
              More Speakers to be announced soon!
            </span>
          </p>
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
        <p
          className={`${styles.flexStart} px-[10px] font-poppins font-medium ss:text-[12px] text-[20px] text-white w-full`}
        >
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
        <p
          className={`${styles.flexStart} px-[10px] font-poppins font-medium ss:text-[12px] text-[20px] text-white w-full`}
        >
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
        <p
          className={`${styles.flexStart} px-[10px] font-poppins font-medium ss:text-[12px] text-[20px] text-white w-full`}
        >
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

export default Speakers;
