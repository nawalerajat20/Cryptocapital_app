const InsightsCard = ({ name, content, img }) => (
  <div className="flex justify-between flex-col  max-w-[400px] bg-white md:mr-10 sm:mr-5 mr-0 my-5">
    <div className="flex flex-row">
      <img
        src={img}
        alt={name}
        className="w-[100px] h-[100px] ml-[80px] rounded-full mt-[15px]"
      />
      <div className="flex flex-col mb-4"></div>
    </div>

    <h4 className="font-poppins font-semibold uppercase text-center text-[25px] leading-[32px] px-[0.5rem] py-[2rem] text-black">
      {name}
    </h4>
    <div className="w-full h-[2px] bg-black mt-[8px]"></div>
    <p className="font-poppins font-normal px-[20px] py-[40px] text-justify text-[16px] px-[0.5rem] py-[1rem] leading-[24px] text-dimWhite">
      {content}
    </p>
  </div>
);

export default InsightsCard;
