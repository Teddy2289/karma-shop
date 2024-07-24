import { Product } from "@/types/product";
import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import { ButtonIcon } from "../Button";
import { Span, Title } from "../Typography";

interface CardProductProps {
  product: Product;
  classname?: string;
}

export const CardProduct = ({ product, classname }: CardProductProps) => {
  return (
    <div className={`flex flex-col gap-4 ${classname} w-1/4 mb-52`}>
      <div className="flex justify-center items-center bg-blue-500 h-[250px] p-8">
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
        <Span classname="text-base font-medium leading-5 uppercase  text-title">
          ${product.price}
        </Span>
      </div>
      <div className="flex flex-row justify-start gap-1">
        <ButtonIcon icon={<FaCirclePlus />}>mandona</ButtonIcon>
        <ButtonIcon icon={<FaCirclePlus />}>mandona</ButtonIcon>
        <ButtonIcon icon={<FaCirclePlus />}>mandona</ButtonIcon>
        <ButtonIcon icon={<FaCirclePlus />}>mandona</ButtonIcon>
      </div>
    </div>
  );
};
