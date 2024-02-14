import { Product } from "@/product/Product";
import { ICart } from "./ICart";

export class Cart implements ICart {
  private readonly _items: Product[] = [];

  addProductToCart(product: Product): void {
    this._items.push(product);
  }

  removeProductFromCart(product: Product): void {
    const item = this._items.indexOf(product);
    this._items.splice(item, 1);
  }

  get items(): readonly Product[] {
    return this._items;
  }

  getTotal(): number {
    let total = 0;

    this._items.forEach((product) => {
      total += product.price;
    });

    return total;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
