import { Landing } from "@/components/Section";
import { CardProduct } from "@/components/ui/Card";
import { Product } from "@/types/product";

const product: Product = {
  image: "/hitsaka.png",
  name: "adidas new hammer sole for sports persons",
  price: 150,
};

export default function Home() {
  return (
    <main className="">
      <Landing />
      <CardProduct product={product} />
    </main>
  );
}
