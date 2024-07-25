import React from "react";
import ImageCard from "./ImageCard";

export default function Gallery() {
  return (
    <>
      <div className="container h-[500px] mx-auto px-2 py-2 mb-10">
        <div className="-m-1 flex gap-3  md:-m-2 h-full">
          <div className="flex w-3/5 flex-col gap-3 h-full">
            <div className="flex gap-3 h-full">
              <div className="w-3/5  h-full">
                <ImageCard
                  alt="gallery"
                  src="/eka.jpg"
                  description="Beautiful landscape"
                />
              </div>
              <div className="w-2/5  h-full">
                <ImageCard
                  alt="gallery"
                  src="/eka.jpg"
                  description="Mountain view"
                />
              </div>
            </div>
            <div className="flex gap-3 h-full">
              <div className="w-2/5 ">
                <ImageCard
                  alt="gallery"
                  src="/eka.jpg"
                  description="Sunset over the hills"
                />
              </div>
              <div className="w-3/5 ">
                <ImageCard
                  alt="gallery"
                  src="/eka.jpg"
                  description="Forest path"
                />
              </div>
            </div>
          </div>
          <div className="flex w-2/5 flex-wrap">
            {/* <div className="w-1/2 ">
              <ImageCard
                alt="gallery"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                description="River flow"
              />
            </div> */}
            <div className="w-full h-full">
              <ImageCard
                alt="gallery"
                src="/eka.jpg"
                description="Mountain peak"
                imgClass="xl:h-[36vw] 2xl-h-[28vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
