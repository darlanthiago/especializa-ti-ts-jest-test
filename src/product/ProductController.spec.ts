import { IProduct } from "./IProduct";
import { Product } from "./Product";
import { ProductController } from "./ProductController";

const makeSut = () => {
  // class ProductRepositorySQL implements IProduct {
  //   findAll(): Product[] {
  //     return [];
  //   }
  //   save(id: string, name: string, price: number): Product {
  //     throw new Error("Method not implemented.");
  //   }
  // }

  // new ProductRepositorySQL

  const mockRepository: jest.Mocked<IProduct> = {
    findAll: jest.fn(),
    save: jest.fn(),
  };

  const sut = new ProductController(mockRepository);

  return {
    sut,
    mockRepository,
  };
};

describe("Product Controller", () => {
  it("should return all products", () => {
    const { mockRepository, sut } = makeSut();
    sut.getAll();
    expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it("should save product", () => {
    const { mockRepository, sut } = makeSut();
    const id = "id";
    const name = "Prod 1";
    const price = 12;
    sut.save(id, name, price);
    expect(mockRepository.save).toHaveBeenCalledTimes(1);
    expect(mockRepository.save).toHaveBeenCalledWith(id, name, price);
  });
});
