"use client";

import { ButtonsProps } from "@/types/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Span } from "../Typography";

export const Button = ({ children, classname, onclick }: ButtonsProps) => {
  return (
    <button
      className={`bg-gradiant px-3 py-3 rounded-full text-white uppercase font-medium text-sm hover:opacity-85 ${classname}`}>
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
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      initial={{ width: "40px" }}
      animate={{ width: isHover ? "150px" : "40px" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-center overflow-hidden cursor-pointer">
      <div className="flex justify-center items-center w-10 h-10 rounded-full text-black">
        {icon}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHover ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="ml-2 text-black">
        {children}
      </motion.span>
    </motion.div>
  );
};
