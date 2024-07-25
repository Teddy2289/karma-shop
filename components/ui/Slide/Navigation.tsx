"use client";
import React, { useRef } from "react";
import { GrLinkNext } from "react-icons/gr";
import { Span } from "../Typography";

interface NavigationProps {
  children: React.ReactNode;
  classname?: string;
  isPrev?: boolean;
}

export const Navigations = ({
  children,
  classname,
  isPrev,
}: NavigationProps) => {
  return (
    <div className={`flex flex-col gap-3 text-gray-500 ${classname}`}>
      <Span>{children}</Span>
      <GrLinkNext className={`scale-x-[2.5] ${isPrev ? "rotate-180" : ""}`} />
    </div>
  );
};
