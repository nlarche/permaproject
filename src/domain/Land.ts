import { Vegetable, VegetableRepository } from "./model/Vegetable";

export class Land {
  repository: VegetableRepository;
  vegetables: Vegetable[] = [];

  constructor(repository: VegetableRepository) {
    this.repository = repository;
    this.vegetables = repository.list();
  }

  addParcel(vegetable: string): Vegetable[] {
    this.repository.add(vegetable);
    this.vegetables = this.repository.list();
    return this.vegetables;
  }

  removeParcel(vegetable: Vegetable): Vegetable[] {
    this.repository.remove(vegetable.id);
    this.vegetables = this.repository.list();
    return this.vegetables;
  }

  getParcel(param: Vegetable) {
    return this.repository.get(param.id);
  }
}
