export type ProductCondition = "new" | "used";

export type ProductCategory = "phone" | "accessory" | "laptop";

export type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  condition: ProductCondition;
  category: ProductCategory;
  image: string;
  description: string;
  isFeatured: boolean;
  inStock: boolean;
  brand?: string;
  model?: string;
  warranty?: string;
  verifiedStatus?: boolean;
  stockQuantity?: number;
};
