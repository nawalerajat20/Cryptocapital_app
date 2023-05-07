import { dummy } from "../assets";
import styles, { layout } from "../style";

const Timeline = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className="w-full flex px-[100px]  justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 py-[40px] relative z-[1]">
      <h2 className={` uppercase text-[70px] font-poppins font-extrabold `}>
        Event <span className="text-red">timeline</span>
      </h2>
    </div>
  </section>
);

export default Timeline;
