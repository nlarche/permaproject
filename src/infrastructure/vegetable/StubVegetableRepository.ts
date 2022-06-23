import {
  Vegetable,
  VegetableId,
  VegetableRepository,
} from "../../domain/model/Vegetable";
import { InMemoryVegetableRepository } from "./InMemoryVegetableRepository";

export class StubVegetableRepository implements VegetableRepository {
  repository: InMemoryVegetableRepository;

  constructor(vegetables: Vegetable[] = []) {
    this.repository = new InMemoryVegetableRepository();
    vegetables.forEach((vegetable) => this.add(vegetable));
  }

  add(vegetable: Vegetable): void {
    this.repository.add(vegetable);
  }

  get(vegetableId: VegetableId): Promise<Vegetable> {
    return this.repository.get(vegetableId);
  }

  list(): Promise<Vegetable[]> {
    return this.repository.list();
  }

  remove(vegetableId: VegetableId): void {
    this.repository.remove(vegetableId);
  }
}
