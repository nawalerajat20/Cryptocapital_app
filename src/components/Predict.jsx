import React from "react";

const Predict = () => {
  return (
    <div className="flex items-center justify-center  mt-[150px] mb-[150px] bg-primary">
      <div className="bg-white rounded-[10px] px-10 py-12 text-black w-[700px] border border-ligthGrey shadow-xl">
        <h2 className="text-2xl text-center uppercase text-darkGrey font-semibold mb-8">
          Report a Feature
        </h2>
        <div className="mb-6">
          <label className="text-left text-[15px] font-semibold ml-1 block">
            {" "}
            Full Name
          </label>
          <input
            type="text"
            id="yourName"
            placeholder="Your Name"
            className="w-full px-3 py-3 rounded-md bg-lightGrey text-[12px] text-white border border-white placeholder-black opacity-50  mt-2"
          />
        </div>
        <div className="mb-6">
          <label className="text-left text-[15px] font-semibold ml-1 block">
            {" "}
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full px-3 py-3 rounded-md bg-lightGrey text-[12px] text-white border border-white placeholder-black opacity-50 mt-2"
          />
        </div>
        <div className="mb-6">
          <label className="text-left text-[15px] font-semibold ml-1 block">
            {" "}
            What was the wrong in features?
          </label>
          <textarea
            id="message"
            placeholder="Enter your features here"
            className="w-full px-3 py-3 rounded-md bg-lightGrey text-[12px] text-white border border-white placeholder-black opacity-50 mt-2"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="text-left text-[15px] font-semibold ml-1 block">
            {" "}
            Details
          </label>
          <textarea
            id="message"
            placeholder="Enter features details here"
            className="w-full px-3 py-3 rounded-md bg-lightGrey text-[12px] text-white border border-white placeholder-black opacity-50 mt-2"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="text-left text-[15px] font-semibold ml-1 block">
            {" "}
            Device Used
          </label>
          <input
            type="text"
            id="device"
            placeholder="Enter Device"
            className="w-full px-3 py-3 rounded-md bg-lightGrey text-[12px] text-white border border-white placeholder-black opacity-50  mt-2"
          />
        </div>
        <div className="mb-6">
          <label className="text-left text-[15px] font-semibold ml-1 block">
            {" "}
            Browser
          </label>
          <input
            type="text"
            id="browser"
            placeholder="Enter Browser"
            className="w-full px-3 py-3 rounded-md bg-lightGrey text-[12px] text-white border border-white placeholder-black opacity-50  mt-2"
          />
        </div>
        <div className="mb-6">
          <label className="text-left text-[15px] font-semibold ml-1 block">
            Operating System
          </label>
          <input
            type="text"
            id="operating"
            placeholder="Enter Operating System"
            className="w-full px-3 py-3 rounded-md bg-lightGrey text-[12px] text-white border border-white placeholder-black opacity-50  mt-2"
          />
        </div>
        <div className="flex flex-row p-2">
          <button className="bg-dimBlue text-white px-2 py-2 ml-[8rem] rounded-md mb-2 w-40">
            Send
          </button>
          <button className="bg-white text-black px-2 py-2 ml-[2rem] rounded-md mb-2 w-40 border border-black">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Predict;
