import { feedback, insights } from "../constants";
import styles from "../style";
import PackageCard from "./PackageCard";

const Packages = () => (
  <section
    id="speakers"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative sm:py-[0px] `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bottom-40 " />

    <div className="w-full flex px-[100px]  justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 py-[40px] relative bg-primary z-[1]">
      <h2 className={`ml-[-2rem] uppercase ${styles.heading2}`}>
        Let's  <br />{" "}
        <span className="text-red text-[70px]">make it happen</span>
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left ml-[10rem] max-w-[450px]`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          explicabo, perspiciatis libero reiciendis rerum animi dolorum ut
          architecto quos culpa deserunt, assumenda ea placeat consequatur
          tempore totam quis recusandae dolore.
        </p>
      </div>
    </div>

    <div className="flex flex-row flex-wrap px-[100px] py-[100px] sm:justify-start grid grid-cols-4 gap-3 justify-center w-full feedback-container relative z-[1]">
      {insights.map((card) => (
        <PackageCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Packages;
