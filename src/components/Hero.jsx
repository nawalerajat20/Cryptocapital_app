import styles from "../style";
import { card } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} bg-red-gradient`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">
              Welcome to the 3rd chapter of TEDxDYPAkurdi.
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-extrabold ss:text-[72px] text-[52px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
            CHAPTER <br className="sm:block hidden" />{" "}
            <span className="text-red">3rd 2023 OF </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-bold ss:text-[68px] text-[52px] text-dimBlack ss:leading-[100.8px] leading-[75px] w-full">
          TEDxDYPAKURDI.
        </h1>
        <p className={`${styles.paragraph} flex max-w-[500px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          mollitia sit excepturi dolore, sequi autem? Voluptatum commodi sint
          voluptates quo mollitia.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 right-12 relative`}
      >
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%]  relative z-[5]"
        />
      </div>
    </section>
  );
};

export default Hero;
