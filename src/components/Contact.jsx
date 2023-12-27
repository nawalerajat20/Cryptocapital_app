import styles from "../style";
import { email, contact, location } from "../assets";

const Contact = () => {
  return (
    <div className="flex justify-between items-center h-screen  mt-[50px] bg-primary">
      <div className="max-w-[400px] mx-auto  ml-[10rem] ">
        <h1 className="text-3xl font-semibold text-black mb-8">
          Contact us and unleash your ideas!
        </h1>
        <p className="text-black mb-8">
          We're here to answer any questions you may have about our services.
          Reach out to us and we'll respond as soon as we can. Thank you for
          your interest in our services!
        </p>
        <div className="flex items-center mb-8">
          <img src={location} alt="Location" className="w-6 h-7 mr-2" />
          <p className="text-black">32, Balewadi Road, Pune, 421154</p>
        </div>
        <div className="flex items-center mb-8 ml-[-0.3rem]">
          <img src={email} alt="Email" className="w-8 h-6 mr-2" />
          <p className="text-black">hello@loremipsum.com</p>
        </div>
        <div className="flex items-center mb-8">
          <img src={contact} alt="Contact" className="w-5 h-8 mr-3" />
          <p className="text-black">+3213 5534 2327</p>
        </div>
      </div>
      <div className="bg-darkGrey rounded-[20px] px-10 py-12 text-white w-[400px] mr-[10rem]">
        <h2 className="text-2xl text-center font-regular mb-8">Get in Touch</h2>
        <div className="mb-6">
          <input
            type="text"
            id="yourName"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-dimGrey opacity-30 text-[13px] text-white placeholder-white"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-dimGrey opacity-30 text-[13px] text-white placeholder-white "
          />
        </div>
        <div className="mb-6">
          <input
            type="tel"
            id="contactNumber"
            placeholder="Contact Number"
            className="w-full px-4 py-3 rounded-md bg-dimGrey opacity-30 text-[13px] text-white placeholder-white"
          />
        </div>
        <div className="mb-6">
          <textarea
            id="message"
            placeholder="Message"
            className="w-full px-4 py-3 rounded-md bg-dimGrey opacity-30 text-[13px] text-white placeholder-white"
            rows="4"
          ></textarea>
        </div>
        <button className="bg-dimBlue text-white px-2 py-2 ml-[5.2rem] rounded-md mb-2 w-40">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
