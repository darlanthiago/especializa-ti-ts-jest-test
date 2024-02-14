import { Product } from "@/product/Product";

export interface ICart {
    addProductToCart(product: Product): void;
    removeProductFromCart(product: Product): void;
    get items(): readonly Product[];
    getTotal(): number;
    isEmpty(): boolean;
    clear(): void;
}


export interface ICart2<T> {
    addProductToCart(product: Product): void;
    removeProductFromCart(product: Product): void;
    get items(): readonly T[];
    getTotal(): number;
    isEmpty(): boolean;
    clear(): void;
}