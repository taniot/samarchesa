export interface ProductType {
  productName: string;
  color: {
    [key: string]: string;
  };
  shortDescription: string;
  description: {
    [key: string]: string;
  };
  images: string[];
}
