import { Category } from "./category.model"

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category | null;
  imageUrl: string;
}
