import { VegetableRepository } from "../../domain/model/Vegetable";
import { Command, CommandEvent } from "../../core";
import { v4 as uuid } from "uuid";

export class AddVegetable implements Command<{ name: string }> {
  private repository: VegetableRepository;

  constructor(vegetableRepository: VegetableRepository) {
    this.repository = vegetableRepository;
  }

  async execute(param: { name: string }): Promise<CommandEvent> {
    const id = uuid();
    await this.repository.add({ id: { id }, name: param.name, type: "annual" });
    return { name: "added" };
  }
}
