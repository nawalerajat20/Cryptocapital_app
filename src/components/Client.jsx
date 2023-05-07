import { stats } from "../constants";
import styles from "../style";
import { sponser1, sponser2, sponser3 } from "../assets";

const Client = () => (
  <section
    id="home"
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
  >
    <div className="w-full flex px-[100px] text-[50px] justify-between items-center md:flex-row flex-col sm:mb-5 mb-6 py-[40px] relative z-[1]">
      <h2 className={`ml-[-2rem] font-extrabold text-red uppercase }`}>
        our clients
      </h2>
    </div>
    <div class="columns-3 gap-[80px] px-[20px] column-3xs marquee">
      <img class="w-[300px] aspect-square " src={sponser1} />
      <img class="w-[300px] aspect-square" src={sponser2} />
      <img class="w-[300px] aspect-square" src={sponser3} />
    </div>
  </section>
);

export default Client;
