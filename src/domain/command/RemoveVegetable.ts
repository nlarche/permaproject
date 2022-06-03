import { VegetableId, VegetableRepository } from "../../domain/model/Vegetable";
import { Command, CommandEvent } from "../../core";

export class RemoveVegetable implements Command<VegetableId> {
  private repository: VegetableRepository;

  constructor(vegetableRepository: VegetableRepository) {
    this.repository = vegetableRepository;
  }

  async execute(vegetableId: VegetableId): Promise<CommandEvent> {
    await this.repository.remove(vegetableId);
    return { name: "removed" };
  }
}
