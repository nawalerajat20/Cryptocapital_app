import { apple, dummy } from "../assets";
import styles, { layout } from "../style";

const Ted = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={dummy}
        alt="billing"
        className=" w-[70%] h-[90%] relative z-[5]"
      />
      <div className="absolute top-30 left-0 w-[100%] h-[70%] bg-red object-contain z-[4] px-[10%] cursor-pointer"></div>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={` mx-20 ${styles.heading2}`}>
        ABOUT <span className="text-red"> TED</span>
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
  </section>
);

export default Ted;
