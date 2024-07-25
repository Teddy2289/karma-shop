import React from "react";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="features-area py-12 md:pt-0 mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shadow-md py-6">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </section>
  );
}
