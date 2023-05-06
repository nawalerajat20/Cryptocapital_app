import { attend} from "../constants";
import styles from "../style";
import AttendCard from "./AttendCard";

const Attend = () => (
  <section
    id="speakers"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bottom-40 " />

    <div className="w-full uppercase flex px-[100px] py-[50px] bg-white justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`ml-[-2rem] ${styles.heading2}`}>
        why you should <br />{" "}
        <span className="text-red text-[80px]">attend?</span>
      </h2>
    </div>

    <div className="flex flex-row flex-wrap px-[60px] grid grid-cols-2 sm:justify-center w-full feedback-container relative z-[1] gap-[1rem]">
      {attend.map((card) => (
        <AttendCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Attend;
