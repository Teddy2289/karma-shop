/* eslint-disable react/no-unescaped-entities */
import { CardProduct } from "@/components/ui/Card";
import { Product } from "@/types/product";
import { SlideProductProps } from "@/types/ui/Slide";
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

export default function NewSection({
  description,
  products,
  title,
}: SlideProductProps) {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-manrope font-bold text-4xl text-black mb-2 max-xl:text-center capitalize">
            {title}
          </h2>
          <p className="w-1/2 mb-2 text-center">{description}</p>
        </div>
        <div className="mx-auto">
          <CardProduct products={product} classname="" />
        </div>
      </div>
    </section>
  );
}
