export interface SlideProps {
  products: ProductBanner[];
  slidePerView?: number;
  spaceBetween?: number;
}

export interface ProductBanner {
  name: string;
  description: string;
  images: any;
}
