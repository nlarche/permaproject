import { Vegetable, VegetableRepository } from "../../domain/model/Vegetable";
import { Query } from "../../core";

export class ListVegetablesQuery implements Query<undefined, Vegetable[]> {
  private repository: VegetableRepository;

  constructor(vegetableRepository: VegetableRepository) {
    this.repository = vegetableRepository;
  }

  async execute(param: undefined): Promise<Vegetable[]> {
    return await this.repository.list();
  }
}
