import { IProduct } from "./IProduct";

export class ProductController {
  constructor(private readonly repository: IProduct) {}

  getAll = () => {
    this.repository.findAll();
  };

  save = (id: string, name: string, price: number) => {
    this.repository.save(id, name, price);
  };
}
