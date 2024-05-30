import { dummy, dummy2 } from "../assets";
import styles, { layout } from "../style";

const Theme = () => (
  <section className={`bg-secondary ${layout.section}`}>
    <div className="flex flex-row gap-[1rem] flex-wrap  mt-[100px]">
      <div className={layout.sectionImage}>
        <div className="flex flex-col gap-[3rem] flex-wrap sm:ml-20 mt-6">
          <img
            src={dummy}
            alt="google_play"
            className="w-[200px] h-[200px] object-contain mr-5 "
          />
          <img
            src={dummy}
            alt="google_play"
            className="w-[200px] h-[200px] object-contain"
          />
          <img
            src={dummy}
            alt="google_play"
            className="w-[200px] h-[200px] object-contain"
          />
        </div>
      </div>

      <img
        src={dummy2}
        alt="google_play"
        className="w-[29rem] h-[100rem] m-[-1rem] mt-[-27rem] object-contain"
      />

      <div
        className={` px-[2.5rem] mt-[-43rem] bg-red sm:ml-[20px] mr-[5rem] mt-[22px] mb-[450px] text-primary text-justify ${layout.sectionInfo}`}
      >
        <h2 className={`text-secondary ${styles.heading2}`}>
          ABOUT <span className="text-primary">UNIVOCAL</span>
        </h2>
        <p className={`${styles.paragraph}max-w-[470px] mt-5 `}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau. Arcu tortor,
          purus in mattis at sed integer faucibus. Aliquet quis aliquet eget
          mauris tortor.ç Aliquet ultrices ac, ametau. Arcu tortor, purus in
          mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
          tortor.ç Aliquet ultrices ac, ametau. Arcu tortor, purus in mattis at
          sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç
          Aliquet ultrices ac, ametau. Aliquet quis aliquet eget mauris tortor.ç
          Aliquet ultrices ac, ametau. Aliquet quis aliquet eget mauris tortor.ç
          Aliquet ultrices ac, ametau.
        </p>
      </div>
    </div>
  </section>
);

export default Theme;
