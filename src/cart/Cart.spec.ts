import { v4 as uuidv4 } from "uuid";

import { Product } from "../product/Product";

import { Cart } from "./Cart";

const makeCart = (): Cart => {
  return new Cart();
};

const makeProduct = (id: string, name: string, price: number): Product => {
  return new Product(id, name, price);
};

const makeSut = () => {
  const sut = makeCart();

  return {
    sut,
  };
};

describe("Cart", () => {
  it("should empty cart", () => {
    const { sut } = makeSut();
    expect(sut.items.length).toBe(0);
  });

  it("should has one item in cart", () => {
    const { sut } = makeSut();
    expect(sut.items.length).toBe(0);
    const product_one = makeProduct(uuidv4(), "Product One", 100);
    sut.addProductToCart(product_one);
    expect(sut.items.length).toBe(1);
  });

  it("should has two items in cart", () => {
    const { sut } = makeSut();
    expect(sut.items.length).toBe(0);
    const product_one = makeProduct(uuidv4(), "Product One", 100);
    const product_two = makeProduct(uuidv4(), "Product Two", 278);
    sut.addProductToCart(product_one);
    sut.addProductToCart(product_two);
    expect(sut.items.length).toBe(2);
  });

  it("should have one if add two and remove one", () => {
    const { sut } = makeSut();
    expect(sut.items.length).toBe(0);
    const product_one = makeProduct(uuidv4(), "Product One", 100);
    const product_two = makeProduct(uuidv4(), "Product Two", 278);
    sut.addProductToCart(product_one);
    sut.addProductToCart(product_two);
    expect(sut.items.length).toBe(2);
    sut.removeProductFromCart(product_one);
    expect(sut.items.length).toBe(1);
  });

  it("should have empty if add two and remove two", () => {
    const { sut } = makeSut();
    expect(sut.items.length).toBe(0);
    const product_one = makeProduct(uuidv4(), "Product One", 100);
    const product_two = makeProduct(uuidv4(), "Product Two", 278);
    sut.addProductToCart(product_one);
    sut.addProductToCart(product_two);
    expect(sut.items.length).toBe(2);
    sut.removeProductFromCart(product_one);
    expect(sut.items.length).toBe(1);
    sut.removeProductFromCart(product_two);
    expect(sut.isEmpty()).toBeTruthy();
  });

  it("should receive 0 from total", () => {
    const { sut } = makeSut();
    expect(sut.getTotal()).toBe(0);
  });

  it("should receive 200 from total", () => {
    const { sut } = makeSut();
    const product_one = makeProduct(uuidv4(), "Product One", 100);
    const product_two = makeProduct(uuidv4(), "Product Two", 100);
    sut.addProductToCart(product_one);
    sut.addProductToCart(product_two);
    expect(sut.getTotal()).toBe(200);
  });

  it("should receive empty from lenght", () => {
    const { sut } = makeSut();
    const product_one = makeProduct(uuidv4(), "Product One", 100);
    const product_two = makeProduct(uuidv4(), "Product Two", 100);
    sut.addProductToCart(product_one);
    sut.addProductToCart(product_two);
    sut.clear();
    expect(sut.isEmpty()).toBeTruthy();
  });
});
