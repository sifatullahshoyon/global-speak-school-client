import React from "react";

const SecondaryBtn = ({ label, onClick, disabled, bg, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      group
      relative
      w-[160px]
            rounded
            bg-white
            text-slate-500
            py-2
            pr-2
            pl-0
            tracking-wide
            text-lg
            font-medium
            hover:bg-transparent
            border-2 border-white
            hover:text-white
            transition  delay-150
            ${bg ? "bg-white" : ""}
            `}
    >
      {label}
      {Icon && (
        <Icon className="text-white absolute right-1 top-4 group-hover:visible invisible delay-150 transition" />
      )}
    </button>
  );
};

export default SecondaryBtn;
