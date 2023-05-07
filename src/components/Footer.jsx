import styles from "../style";
import { logo2 } from "../assets";
import { socialMedia } from "../constants";
const Footer = () => (
  <section
    id="contactUs"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo2}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} text-white mt-4 max-w-[400px]`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eos
          nihil nostrum ipsum quod rerum fuga velit assumenda pariatur impedit.
        </p>
        <p
          className={`${styles.paragraph} text-white text-[20px] uppercase mt-8 font-semibold`}
        >
          Organiser
        </p>
        <p
          className={`${styles.paragraph} text-white text-[20px] mt-8 font-medium`}
        >
          Sukanya Biradar - +9190XXXXXXX90 <br />
          Sukanya Biradar - +9190XXXXXXX90 <br />
        </p>
        <p
          className={`${styles.paragraph} text-white text-[20px] mt-8 font-medium`}
        >
          sponsorships@tedxdypakurdi.com <br />
          support@tedxdypakurdi.com
        </p>
      </div>

      <div className="flex-[1.5] w-full text-primary flex flex-col justify-between flex-wrap md:mt-0 mt-10">
        <h2
          className={`font-semibold text-primary text-center text-[30px] py-[25px] mt-[-5px] uppercase }`}
        >
          join our newsletter
        </h2>
        <form>
          <label htmlFor="email-input" className="sr-only">
            Enter your email
          </label>
          <div className="flex flex-row px-20 items-center gap-3 overflow-hidden">
            <input
              type="email"
              id="email-input"
              placeholder="Enter your email"
              className="py-2 px-3 w-[500px] rounded-md  outline-none"
              // value={email}
              // onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-red rounded-md hover:bg-black text-white px-6 py-2"
            >
              Submit
            </button>
          </div>
        </form>

        <p
          className={`flex flex-row px-20 item-center font-normal text-primary w-[800px] text-[15px] py-[25px] mt-[-5px] text-justify}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          dolorum corporis voluptates repellat incidunt voluptate officia
          impedit! Rerum unde nemo illo dolorem nihil repudiandae voluptatum
          libero, saepe dolores cum officia.
        </p>

        <div className="flex flex-row justify-center md:mt-8 mt-10 mr-8">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[40px] h-[38px]  object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-10" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ TedxDYPAkurdi2023. All Rights Reserved.
      </p>

      <div className="flex flex-row px-[20px] gap-8 md:mt-0 mt-6">
        <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
          Privacy
        </p>
        <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
          FAQ
        </p>
        <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
          Contact
        </p>
      </div>
    </div>
  </section>
);
export default Footer;
