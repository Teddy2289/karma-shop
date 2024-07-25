import { Landing } from "@/components/Section";
import Features from "@/components/Section/Features/Features";
import NewSection from "@/components/Section/NewArival/NewSection";
import { CardProduct } from "@/components/ui/Card";
import DropdownContainer from "@/components/ui/Dropdown/DropdownContainer";
import Gallery from "@/components/ui/Gallery/Gallery";
import { Product } from "@/types/product";

export default function Home() {
  return (
    <main className="md:container md:mx-auto">
      <DropdownContainer />
      <Landing />
      <div className="max-w-7xl mx-auto">
        <Features />
        <Gallery />
        <NewSection />
      </div>
    </main>
  );
}
