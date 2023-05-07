import { timeline } from "../assets";
import styles, { layout } from "../style";

const Timeline = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className="w-full  px-[200px] text-[60px] justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 py-[40px] relative z-[1]">
      <h2 className={`font-extrabold uppercase text-center mb-8`}>
       Event 
        <span className="text-red font-extrabold"> Timeline</span>
      </h2>
      <div className="flex flex-col items-center">
        <img src={timeline} alt="timeline" className="w-[1000px] h-[500px]" />
      </div>
    </div>

    {/* <div className="w-full flex flex-col px-[100px] text-[40px] justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 py-[40px] relative z-[1]">
      <h2 className={`ml-[-2rem] font-medium uppercase }`}>
        we have got the right package for you <br />{" "}
        <span className="text-red font-extrabold ">tiers and packages</span>
      </h2>
      <div className="flex flex-col flex-wrap px-[100px] py-[30px] sm:justify-start grid grid-cols-3 gap-2 justify-center w-full feedback-container relative z-[1]">
     <img src={timeline} alt="timeline" className="w-[800px] h-[200px]" />
    </div>

    </div> */}
  </section>
);

export default Timeline;
