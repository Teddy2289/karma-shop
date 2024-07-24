import { ProductBanner } from "@/types/ui/Slide";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { Button } from "../../ui/Button";
import { P, Span, Title } from "../../ui/Typography";

export const Banner = ({ description, images, name }: ProductBanner) => {
  return (
    <div className="flex justify-between px-20 items-center">
      <div className="flex flex-col gap-10 w-1/2">
        <Title
          level={1}
          classname="text-6xl capitalize font-bold max-w-[300px] leading-tight"
        >
          {name}
        </Title>
        <P classname="max-w-[450px]">{description}</P>
        <div className="flex gap-2 items-center">
          <Button classname="text-lg">
            <FaPlus />
          </Button>
          <Span classname="text-black uppercase">add to bag</Span>
        </div>
      </div>
      <Image
        src={images}
        className="w-1/2"
        alt={name}
        width={1000}
        height={1000}
      />
    </div>
  );
};
