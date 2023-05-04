import { aboutus } from "../assets";
import styles, { layout } from "../style";

const Theme = () => (
  <section
    id="product"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div className={layout.sectionInfo}>
      <h1 className="flex-1 font-poppins font-semibold text-secondary ss:text-[72px] text-[52px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
        About Chaptername
      </h1>
      <p className={`${styles.paragraph} max-w-[500px] mt-6 mb-12`}>
        TED is a nonprofit organization that is devoted to spreading ideas
        through short, powerful talks. Its mission is to inspire, educate, and
        entertain, and it has become a global phenomenon, with events and talks
        available in many languages. <br />
        <br />
        The annual TED Conference invites the world’s leading thinkers and doers
        to speak for 18 minutes. Their talks are then made available, free, at
        TED.com. <br />
        <br />
        TED speakers have included Bill Gates, Al Gore, Jane Goodall, Elizabeth
        Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi
        Okonjo-Iweala, Isabel Allende and former UK Prime Minister Gordon Brown.
      </p>
    </div>

    <div className={layout.sectionImgReverse}>
      <img src={aboutus} alt="Ted" className="w-[80%] h-[100%] left-20 relative z-[5]" />
    </div>
  </section>
);

export default Theme;
