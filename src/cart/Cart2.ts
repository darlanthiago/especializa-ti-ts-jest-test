import { Product } from "@/product/Product";
import { ICart2 } from "./ICart";

type ItemCart = {
  product: Product;
  quantity: number;
};

export class Cart2 implements ICart2<ItemCart> {
  private readonly _items: ItemCart[] = [];

  addProductToCart(product: Product): void {
    const index = this._items.findIndex(
      (item) => item.product.id === product.id
    );

    if (index !== -1) {
      this._items[index] = {
        product,
        quantity: this._items[index].quantity + 1,
      };

      return;
    }

    this._items.push({
      product,
      quantity: 1,
    });
  }

  removeProductFromCart(product: Product): void {
    this._items.forEach((item) => {
      if (product === item.product) {
        this._items.splice(this._items.indexOf(item), 1);
      }
    });
  }

  get items(): readonly ItemCart[] {
    return this._items;
  }

  getTotal(): number {
    let total = 0;

    this._items.forEach((item) => {
      total += item.product.price * item.quantity;
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
