import { products } from "@/utils/data";
import { Slide } from "../ui/Slide";

export const Landing = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: "url(/banner-bg.jpg)" }}
    >
      <Slide products={products} />
    </div>
  );
};
