import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-3 px-8 font-poppins font-medium text-[18px] text-primary bg-black rounded-[10px] outline-none ${styles}`}
  >
    Get in touch
  </button>
);

export default Button;
