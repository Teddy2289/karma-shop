"use client";
import { motion } from "framer-motion";
import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  description: string;
  imgClass?: string;
}

const ImageCard = ({ src, alt, description, imgClass }: ImageCardProps) => {
  return (
    // <div className="relative overflow-hidden rounded-lg">
    //   <img
    //     alt={alt}
    //     src={src}
    //     className="block h-full w-full object-cover object-center"
    //   />
    //   <motion.div
    //     initial={{ y: "100%" }}
    //     whileHover={{ y: 0 }}
    //     transition={{ type: "spring", stiffness: 300, damping: 30 }}
    //     className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white">
    //     <p className="p-4 text-center">{description}</p>
    //   </motion.div>
    // </div>
    <div
      className="relative overflow-hidden h-full bg-cover bg-no-repeat bg-center group"
      style={{ backgroundImage: `url(${src})` }}>
      <div className="mt-10 mx-auto">
        <div className="">
          {/* <img
            src={src}
            alt={alt}
            className={`block h-[250px] w-full object-cover object-center ${imgClass}`}
          /> */}
          <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-50 group-hover:opacity-80 absolute top-0 left-0 h-full w-full"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
            <div className="flex-row text-center translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 ease-in]">
              <h1 className="text-gray-50 font-bold text-lg">
                Be careful on the way.
              </h1>
              <p className="text-gray-200 font-medium text-sm">Tulus</p>
              <small className="text-xs font-light text-gray-300">
                Photo by Sébastien Goldberg on Unsplash
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
