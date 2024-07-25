import Image from "next/image";
import React from "react";

export default function FeatureCard() {
  return (
    <div className="single-feature text-center border-r-2 border-gray-200 last:border-r-0 md:last:mb-8 md:last:mt-8 lg:last:mb-0">
      <div className="f-icon mb-5">
        <Image
          src="/f-icon1.png"
          alt=""
          width={30}
          height={30}
          className="transition-opacity duration-300 ease-in-out hover:opacity-50 mx-auto"
        />
      </div>
      <h6 className="text-base font-semibold mb-0">24/7 Support</h6>
      <p className="text-gray-600 mb-0">Free Shipping on all orders</p>
    </div>
  );
}
