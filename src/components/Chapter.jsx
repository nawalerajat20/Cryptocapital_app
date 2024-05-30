import { aboutus } from "../assets";
import styles, { layout } from "../style";

const Chapter = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
      <h2 className={` mx-20 ${styles.heading2}`}>
        ABOUT <span className="text-red"> CHAPTER</span>
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
        src={aboutus}
        alt="chapter"
        className=" w-[60%] h-[100%] left-8 relative z-[5]"
      />
     </div>
  </section>
);

export default Chapter;
