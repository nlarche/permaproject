import { VegetableRepository } from "../../domain/model/Vegetable";
import { Command, CommandEvent } from "../../core";

export class AddVegetable implements Command<{ name: string }> {
  private repository: VegetableRepository;

  constructor(vegetableRepository: VegetableRepository) {
    this.repository = vegetableRepository;
  }

  async execute(param: { name: string }): Promise<CommandEvent> {
    await this.repository.add(param.name);
    return { name: "added" };
  }
}
