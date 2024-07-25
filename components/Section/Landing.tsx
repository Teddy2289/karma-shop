import { products } from "@/utils/data";
import { Slide } from "../ui/Slide";

export const Landing = () => {
  return (
    <div
      className="relativ max-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat flex justify-center items-center  mb-10"
      style={{ backgroundImage: "url(/banner-bg.jpg)" }}>
      <Slide products={products} />
    </div>
  );
};
