import {
  Vegetable,
  VegetableId,
  VegetableRepository,
} from "../../domain/model/Vegetable";

export class InMemoryVegetableRepository implements VegetableRepository {
  vegetables: Vegetable[] = [];

  add(name: string): void {
    this.vegetables = [
      { id: { id: this.vegetables.length }, type: "annual", name },
      ...this.vegetables,
    ];
  }

  list(): Vegetable[] {
    return this.vegetables;
  }

  remove(vegetableId: VegetableId): void {
    this.vegetables = this.vegetables.filter((v) => v.id.id !== vegetableId.id);
  }

  get(vegetableId: VegetableId): Vegetable {
    const vegetable = this.vegetables.find((v) => v.id.id === vegetableId.id);
    if (!vegetable) {
      throw "vegetable not found";
    }
    return vegetable;
  }
}
