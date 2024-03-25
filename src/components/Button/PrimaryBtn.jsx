import React from "react";

const PrimaryBtn = ({ label, onClick, disabled, border, bg, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
            relative
            w-[150px]
            rounded
            bg-amber-600
            text-white
            p-2
            tracking-wide
            text-lg
            font-medium
            hover:bg-amber-500
            hover:border-2 border-amber-500
            transition duration-150 delay-150
            ${border ? "border-2 border-white" : "border-2 border-amber-500"}
            ${bg ? "bg-white" : ""}
            `}
    >
      {label}
      {Icon && (
        <Icon className="text-red-600 hidden  hover:visible hover:absolute hover:right-1 hover:top-4" />
      )}
    </button>
  );
};

export default PrimaryBtn;
