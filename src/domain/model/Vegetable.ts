export interface VegetableId {
  id: number;
}

export interface Vegetable {
  id: VegetableId;
  name: string;
  type: "annual" | "perennial";
}

export interface VegetableRepository {
  list: () => Vegetable[];
  add: (name: string) => void;
  remove: (vegetableId: VegetableId) => void;
  get: (vegetableId: VegetableId) => Vegetable;
}
