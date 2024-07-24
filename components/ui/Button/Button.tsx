"use client";

import { ButtonsProps } from "@/types/ui/button";
import { useState } from "react";
import { Span } from "../Typography";

export const Button = ({ children, classname, onclick }: ButtonsProps) => {
  return (
    <button
      className={`bg-gradiant px-3 py-3 rounded-full text-white uppercase font-medium text-sm hover:opacity-85 ${classname}`}
    >
      {children}
    </button>
  );
};

interface IconProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const ButtonIcon = ({ children, icon }: IconProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="group w-fit flex gap-1 items-center"
    >
      <Span classname="text-blue-700 text-[25px]">{icon}</Span>
      <Span classname="text-title w-0 invisible group-hover:w-fit group-hover:visible transition-[width]">
        {children}
      </Span>
    </div>
  );
};
