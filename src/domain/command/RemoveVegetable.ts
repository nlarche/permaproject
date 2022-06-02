import { VegetableId, VegetableRepository } from "../../domain/model/Vegetable";
import { Command } from "../../core";

export class RemoveVegetable implements Command<VegetableId> {
  private repository: VegetableRepository;

  constructor(vegetableRepository: VegetableRepository) {
    this.repository = vegetableRepository;
  }

  execute(vegetableId: VegetableId): void {
    this.repository.remove(vegetableId);
  }
}
