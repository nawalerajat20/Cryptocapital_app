import styles from "../style";
import { whitelogo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const sectionStyle = {
    borderRadius: "20px", // Adjust the value to change the amount of rounding
    overflow: "hidden", // Ensure content doesn't overflow rounded corners
  };
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col ${styles.rounded}`}
      style={sectionStyle}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={whitelogo}
            alt="cryptocapital"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p
            className={`${styles.paragraph} text-dimGrey ml-5 mt-4 max-w-[420px]`}
          >
            Master Your Crypto Strategy and gain an edge in the ever-evolving
            cryptocurrency market.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.id}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimGrey hover:text-dimBlue cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                    onClick={() => (window.location.href = link.url)}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimGrey">
          Copyright Ⓒ 2023 CryptoCapital. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
