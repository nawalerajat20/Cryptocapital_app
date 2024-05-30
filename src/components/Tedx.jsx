import { dummy } from "../assets";
import styles, { layout } from "../style";

const Tedx = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
      <h2 className={` mx-20 ${styles.heading2}`}>
        ABOUT <span className="text-red"> TEDx</span>
      </h2>
      <p className={`${styles.paragraph} mx-20 max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
    </div>

    <div className={layout.sectionImgReverse}>
      <img
        src={dummy}
        alt="billing"
        className=" w-[70%] h-[90%] left-8 relative z-[5]"
      />
      <div className="absolute top-30 left-10 w-[100%] h-[70%] bg-red object-contain z-[4] px-[10%] cursor-pointer"></div>
    </div>
  </section>
);

export default Tedx;
