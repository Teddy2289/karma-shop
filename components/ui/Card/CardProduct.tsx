import { Product } from "@/types/product";
import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import { ButtonIcon } from "../Button";
import { Span, Title } from "../Typography";

interface CardProductProps {
  products: Product[];
  classname?: string;
}

export const CardProduct = ({ products, classname }: CardProductProps) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 grid-rows-2 ${classname}`}>
      {products.map((product, index) => (
        <div key={index} className="flex flex-wrap flex-col gap-4 w-full mb-8">
          <div className="flex justify-center items-center bg-slate-200 h-[250px] p-8">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-fit h-fit"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Title level={6}>{product.name}</Title>
            <Span classname="text-base font-medium leading-5 uppercase text-title">
              ${product.price}
            </Span>
          </div>
          <div className="flex flex-row justify-start gap-1">
            <ButtonIcon icon={<FaCirclePlus className="text-2xl" />}>
              mandona
            </ButtonIcon>
            <ButtonIcon icon={<FaCirclePlus className="text-2xl" />}>
              mandona
            </ButtonIcon>
            <ButtonIcon icon={<FaCirclePlus className="text-2xl" />}>
              mandona
            </ButtonIcon>
            <ButtonIcon icon={<FaCirclePlus className="text-2xl" />}>
              mandona
            </ButtonIcon>
          </div>
        </div>
      ))}
    </div>
  );
};
