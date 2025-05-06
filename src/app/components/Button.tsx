import React from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  heigth: number;
  width: number;
};

const Button = ({ type, title, icon, variant, heigth, width }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-3 rounded-full border ${variant} cursor-pointer`}
    >
      {icon && <Image src={icon} alt={title} height={heigth} width={width} />}
      <label className="text-[16px] font-[700] whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;
