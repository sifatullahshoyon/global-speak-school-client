import React from "react";

const SecondaryBtn = ({ label, onClick, disabled, bg, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      width="150"
      className={`
            relative
            rounded
            bg-white
            text-slate-500
            p-2
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
        <Icon className="text-red-600   hover:visible hover:absolute hover:right-1 hover:top-4" />
      )}
    </button>
  );
};

export default SecondaryBtn;
