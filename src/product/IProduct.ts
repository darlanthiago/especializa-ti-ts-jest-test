import { Product } from "./Product";

export interface IProduct {
  findAll(): Product[];
  save(id: string, name: string, price: number): Product;
}
