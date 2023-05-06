import styles from "../style";

const AttendCard = ({ name, title, img }) => (


    <div className="flex justify-between flex-row px-[30px]  md:mr-[10rem] sm:mr-10 mr-0 my-5 ">
      <div className="flex flex-row sm:px-20 ">
        <img src={img} alt={name} className=" ml-[-80px] w-[200px] h-[180px] relative " />
        <div
          className={` ${styles.flexStart} flex flex-col px-[2px] max-w-[200px] ml-4 sm:ml-10 ml-0 sm:mt-0 mt-10`}
        >
          <h4 className="font-poppins font-semibold  text-[20px] leading-[32px] text-red">
            {name}
          </h4>
          <p className="font-poppins font-normal text-justify max-w-[500px] text-[10px] leading-[24px] text-black">
            {title}
          </p>
        </div>
      </div>
    </div>
);

export default AttendCard;

