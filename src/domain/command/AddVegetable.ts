import { VegetableRepository } from "../../domain/model/Vegetable";
import { Command } from "../../core";

export class AddVegetable implements Command<{ name: string }> {
  private repository: VegetableRepository;

  constructor(vegetableRepository: VegetableRepository) {
    this.repository = vegetableRepository;
  }

  execute(param: { name: string }): void {
    this.repository.add(param.name);
  }
}
