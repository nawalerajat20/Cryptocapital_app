import { feedback } from "../constants";
import styles from "../style";
import SpeakerCard from "./SpeakerCard";

const Speakers = () => (
  <section
    id="speakers"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bottom-40 " />

    <div className="w-full flex px-[100px] justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`ml-[-2rem] ${styles.heading2}`}>
        MEET OUR CREATORS <br />{" "}
        <span className="text-dimBlue">TEAM OF DEVELOPERS</span>
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left ml-[10rem] max-w-[500px]`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          explicabo, perspiciatis libero reiciendis rerum animi dolorum ut
          architecto quos culpa deserunt, assumenda ea placeat consequatur
          tempore totam quis recusandae dolore.
        </p>
      </div>
    </div>

    <div className="flex flex-row flex-wrap px-[60px] sm:justify-start grid grid-cols-4 justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <SpeakerCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Speakers;
