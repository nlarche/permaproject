export interface VegetableId {
  id: string;
}

export interface Vegetable {
  id: VegetableId;
  name: string;
  type: "annual" | "perennial";
  seedingDate: number;
}

export interface VegetableRepository {
  list: () => Promise<Vegetable[]>;
  add: (vegetable: Vegetable) => void;
  remove: (vegetableId: VegetableId) => void;
  get: (vegetableId: VegetableId) => Promise<Vegetable>;
}
