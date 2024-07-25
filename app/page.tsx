import { Landing } from "@/components/Section";
import Features from "@/components/Section/Features/Features";
import NewSection from "@/components/Section/NewArival/NewSection";
import { CardProduct } from "@/components/ui/Card";
import DropdownContainer from "@/components/ui/Dropdown/DropdownContainer";
import Gallery from "@/components/ui/Gallery/Gallery";
import { Slide } from "@/components/ui/Slide";
import { Product } from "@/types/product";
import { commingProduct, products } from "@/utils/data";

export default function Home() {
  return (
    <main className="md:container md:mx-auto">
      <DropdownContainer />
      <Landing />
      <div className="max-w-7xl mx-auto">
        <Features />
        <Gallery />

        <Slide
          products={commingProduct}
          slidePerView={1}
          hasNavigation
          nextClass="sw-next"
          prevClass="sw-prev"
        />
      </div>
    </main>
  );
}
