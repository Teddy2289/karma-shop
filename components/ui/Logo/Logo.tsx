import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <>
      <Image
        className="objet-cover w-full"
        src="/logo3.png"
        alt="logo"
        width={90}
        height={90}
      />
    </>
  );
}
