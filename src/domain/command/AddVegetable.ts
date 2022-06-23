import { VegetableRepository } from "../../domain/model/Vegetable";
import { Command, CommandEvent, PermaUtils } from "../../core";

export class AddVegetable implements Command<{ name: string }> {
  private repository: VegetableRepository;
  private permaUtils: PermaUtils;

  constructor(
    vegetableRepository: VegetableRepository,
    permaUtils: PermaUtils
  ) {
    this.repository = vegetableRepository;
    this.permaUtils = permaUtils;
  }

  async execute(param: { name: string }): Promise<CommandEvent> {
    await this.repository.add({
      id: { id: this.permaUtils.getNewId() },
      name: param.name,
      type: "annual",
      seedingDate: this.permaUtils.getNewDate(),
    });
    return { name: "added" };
  }
}
