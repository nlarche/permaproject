import Hexagon from "../../../infrastructure/Hexagon";
import { Observable } from "../../../core/observable";
import { FirebaseRepository } from "../../../infrastructure/vegetable/FirebaseRepository";

export const observable = new Observable();

// export const vegetableRepository = new StubVegetableRepository([
//   { name: "Tomate" },
//   { name: "Salade" },
// ] as Vegetable[]);

const { eventBus, handleQuery, handleCommand } = Hexagon(
  observable,
  new FirebaseRepository()
);

export { eventBus, handleQuery, handleCommand };
