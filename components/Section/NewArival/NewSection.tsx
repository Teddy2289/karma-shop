/* eslint-disable react/no-unescaped-entities */
import { CardProduct } from "@/components/ui/Card";
import { Product } from "@/types/product";
import React from "react";

const product: Product[] = [
  {
    image: "/macbook.png",
    name: "adidas new hammer sole for sports persons",
    price: 150,
  },
  {
    image: "/macbook.png",
    name: "adidas new hammer sole for sports persons",
    price: 150,
  },
  {
    image: "/macbook.png",
    name: "adidas new hammer sole for sports persons",
    price: 150,
  },
  {
    image: "/macbook.png",
    name: "adidas new hammer sole for sports persons",
    price: 150,
  },
  {
    image: "/macbook.png",
    name: "adidas new hammer sole for sports persons",
    price: 150,
  },
  {
    image: "/macbook.png",
    name: "adidas new hammer sole for sports persons",
    price: 150,
  },
  {
    image: "/macbook.png",
    name: "adidas new hammer sole for sports persons",
    price: 150,
  },
  {
    image: "/macbook.png",
    name: "adidas new hammer sole for sports persons",
    price: 150,
  },
];

export default function NewSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-manrope font-bold text-4xl text-black mb-2 max-xl:text-center">
            New Arrivals
          </h2>
          <p className="w-1/2 mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            voluptate quo explicabo quod error, consectetur similique ut fugiat,
            nam non eum ipsa id esse officia aliquam veritatis eos vitae rem.
          </p>
        </div>
        <div className="mx-auto">
          <CardProduct products={product} classname="" />
        </div>
      </div>
    </section>
  );
}
