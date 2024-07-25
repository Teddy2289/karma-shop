export interface SlideProps {
  products: any[];
  slidePerView?: number;
  spaceBetween?: number;
  nextClass?: string;
  prevClass?: string;
  hasNavigation?: boolean;
}

export interface SlideProductProps {
  title: string;
  description: string;
  products: ProductBanner[];
}

export interface ProductBanner {
  name: string;
  description: string;
  images: any;
}
