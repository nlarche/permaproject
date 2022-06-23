import Hexagon from "../../../infrastructure/Hexagon";
import { Observable } from "../../../core/observable";
import { LocalStorageVegetableRepository } from "../../../infrastructure/vegetable/LocalStorageVegetableRepository";

export const observable = new Observable();

// export const vegetableRepository = new StubVegetableRepository([
//   { name: "Tomate" },
//   { name: "Salade" },
// ] as Vegetable[]);

const { eventBus, handleQuery, handleCommand } = Hexagon(
  observable,
  new LocalStorageVegetableRepository()
);

export { eventBus, handleQuery, handleCommand };
