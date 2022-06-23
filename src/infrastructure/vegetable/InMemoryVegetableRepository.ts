import {
  Vegetable,
  VegetableId,
  VegetableRepository,
} from "../../domain/model/Vegetable";

export class InMemoryVegetableRepository implements VegetableRepository {
  vegetables: Vegetable[] = [];

  add(vegetable: Vegetable): void {
    this.vegetables = [vegetable, ...this.vegetables];
  }

  list(): Promise<Vegetable[]> {
    return Promise.resolve(this.vegetables);
  }

  remove(vegetableId: VegetableId): void {
    this.vegetables = this.vegetables.filter((v) => v.id.id !== vegetableId.id);
  }

  get(vegetableId: VegetableId): Promise<Vegetable> {
    const vegetable = this.vegetables.find((v) => v.id.id === vegetableId.id);
    if (!vegetable) {
      const error = new Error("vegetable not found");
      return Promise.reject(error);
    }
    return Promise.resolve(vegetable);
  }
}
