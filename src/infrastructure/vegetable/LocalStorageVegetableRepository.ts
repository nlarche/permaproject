import {
  Vegetable,
  VegetableId,
  VegetableRepository,
} from "../../domain/model/Vegetable";

const key = "VEGETABLES";

export class LocalStorageVegetableRepository implements VegetableRepository {
  vegetables: Vegetable[] = [];

  persist(vegetables: Vegetable[]) {
    localStorage.setItem(key, JSON.stringify(vegetables));
  }

  listFromStorage() {
    const peristedList = localStorage.getItem(key);
    if (peristedList) {
      this.vegetables = JSON.parse(peristedList);
    }
  }

  add(name: string): void {
    this.vegetables = [
      { id: { id: this.vegetables.length }, type: "annual", name },
      ...this.vegetables,
    ];
    this.persist(this.vegetables);
  }

  list(): Promise<Vegetable[]> {
    this.listFromStorage();
    return Promise.resolve(this.vegetables);
  }

  remove(vegetableId: VegetableId): void {
    this.vegetables = this.vegetables.filter((v) => v.id.id !== vegetableId.id);
    this.persist(this.vegetables);
  }

  get(vegetableId: VegetableId): Promise<Vegetable> {
    this.listFromStorage();
    const vegetable = this.vegetables.find((v) => v.id.id === vegetableId.id);
    if (!vegetable) {
      const error = new Error("vegetable not found");
      return Promise.reject(error);
    }
    return Promise.resolve(vegetable);
  }
}
