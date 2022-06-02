export interface VegetableId {
  id: number;
}

export interface Vegetable {
  id: VegetableId;
  name: string;
  type: "annual" | "perennial";
}

export interface VegetableRepository {
  list: () => Promise<Vegetable[]>;
  add: (name: string) => void;
  remove: (vegetableId: VegetableId) => void;
  get: (vegetableId: VegetableId) => Promise<Vegetable>;
}
