import styles from "../style";
import Button from "./Button";
import { F2 } from "../assets";
import { layout } from "../style";

const Description = () => (
  <section
    id="aboutinfo"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    style={{ textAlign: "center" }}
  >
    <div className="w-full flex px-[100px] py-[20px] bg-white justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <div className="text-center">
        <h2 className={styles.heading2}>
          Why we are trusted over the <br className="sm:block hidden" /> world
          in the crypto market
        </h2>
        <p className="text-black text-center mt-[2rem]  max-w-[700px] md:text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi
          repellat, cumque ut distinctio voluptate deleniti assumenda velit
          molestiae in, est tempora temporibus atque? Natus nemo mollitia
          possimus voluptatem nihil!{" "}
        </p>
      </div>
    </div>

    <div className="flex justify-center ml-20 mr-20">
      <div className="flex items-center">
        <div className="bg-lightBlue w-90 p-40 h-90 flex flex-col justify-center items-center text-center">
          {/* Adjust width and height to create a square appearance */}
          <h3 className="text-black mb-3 text-base md:text-lg font-bold">
            Optimize and scale, easy to start{" "}
          </h3>
          <p className="text-white text-justify text-sm md:text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            dolor minima optio impedit dolore, laboriosam vero tempore ut nobis.
            Quam explicabo repudiandae amet earum, eaque accusantium ducimus
            veniam a eligendi?
          </p>
          <Button styles={`mt-10`} />
        </div>
        <div className="bg-black w-90 p-40 h-90 flex flex-col justify-center items-center text-center">
          <div className={layout.sectionImg}>
            <img src={F2} alt="image" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Description;
