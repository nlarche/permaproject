import { StubVegetableRepository } from "../../../../infrastructure/vegetable/StubVegetableRepository";
import { Vegetable } from "../../../../domain/model/Vegetable";

export const vegetableRepository = new StubVegetableRepository([
  { name: "Tomate" },
  { name: "Salade" },
] as Vegetable[]);
