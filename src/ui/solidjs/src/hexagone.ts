import { PubSub } from "../../../core/pubSub";
import Hexagon from "../../../infrastructure/Hexagon";
import { LocalStorageVegetableRepository } from "../../../infrastructure/vegetable/LocalStorageVegetableRepository";

export const pubSub = new PubSub();

// export const vegetableRepository = new StubVegetableRepository([
//   { name: "Tomate" },
//   { name: "Salade" },
// ] as Vegetable[]);

const { eventBus, handleQuery, handleCommand } = Hexagon(
  pubSub,
  new LocalStorageVegetableRepository()
);

export { eventBus, handleQuery, handleCommand };
