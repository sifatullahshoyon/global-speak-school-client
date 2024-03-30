import React from "react";

const CardBtn = ({ label }) => {
  return (
    <div>
      <button className="group flex  cursor-pointer flex-col text-sky-600 hover:text-amber-500 font-medium ">
        {label}{" "}
        <span className="mt-[2px] h-[3px] w-[25px] rounded-full bg-amber-500 hover:bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
      </button>
    </div>
  );
};

export default CardBtn;
