// import { A1 } from "../assets";
// import styles, { layout } from "../style";

// const AboutUs = () => (
//   <section
//     id="aboutinfo"
//     className={`${styles.paddingY} ${styles.flexCenter}  flex-col relative `}
//   >
//     <div className="w-full uppercase flex px-[100px] py-[20px] bg-white justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
//       <h2 className={`ml-[28rem] ${styles.heading2}`}>WHO WE ARE?</h2>
//     </div>

//     <div className="flex items-center justify-center space-x-10 ">
//       <div className={layout.sectionImgReverse}>
//         <img
//           src={A1}
//           alt="audience"
//           className="w-[100%] h-[100%] relative z-[5]"
//         />
//       </div>

//       <div className={layout.sectionInfo}>
//         <h2 className={styles.heading2}>ABOUT US</h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
//           aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
//           placerat.Elit enim sed massa etiam. Mauris eu adipiscing ultrices
//           ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer
//           platea placerat.Elit enim sed massa etiam. Mauris eu adipiscing
//           ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
//           integer platea placerat.
//         </p>
//       </div>
//     </div>
//   </section>
// );

import { A1 } from "../assets";
import styles, { layout } from "../style";

const AboutUs = () => (
  <section
    id="aboutinfo"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="w-full uppercase flex px-[100px] py-[20px] bg-white justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`ml-[28rem] ${styles.heading2}`}>WHO WE ARE?</h2>
    </div>

    <div className="flex items-stretch ml-[15rem] ">
      {" "}
      <div className="flex-1">
        <div className={layout.sectionImgReverse}>
          <img
            src={A1}
            alt="audience"
            className="w-[300px] h-[560px] mt-50 ml-[-15rem] md:w-[50%] lg:w-[70%] xl:w-[80%]" /* Adjust image width */
          />
        </div>
      </div>
      <div className="flex-1 flex items-center">
        {" "}
        <div className="bg-grey w-[78%] h-[100%] py-2 px-2  flex flex-col justify-center items-center text-center rounded-[20px] mt-2 ">
          <h3
            className={`${styles.heading2} text-black mb-4 text-lg font-bold`}
          >
            ABOUT US
          </h3>
          <p className="text-black text-center text-sm ml-[100px] mr-[100px] max-w-[800px]">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat. Elit enim sed massa etiam. Mauris eu adipiscing ultrices
            ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer
            platea placerat. Elit enim sed massa etiam. Mauris eu adipiscing
            ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
            aliporttitor integer platea placerat. Elit enim sed massa etiam.
            Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum
            orci rhoncus aliporttitor integer platea placerat. 
            placerat.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
