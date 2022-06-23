export interface VegetableId {
  id: string;
}

export interface Vegetable {
  id: VegetableId;
  name: string;
  type: "annual" | "perennial";
  seedingDate: number;
}

export type Maturity = "JUVENILE" | "GROWING" | "READY" | "DYING" | "DEAD";

export interface VegetableView {
  id: VegetableId;
  name: string;
  maturity: Maturity;
}

export interface VegetableRepository {
  list: () => Promise<Vegetable[]>;
  add: (vegetable: Vegetable) => void;
  remove: (vegetableId: VegetableId) => void;
  get: (vegetableId: VegetableId) => Promise<Vegetable>;
}
