import { Vegetable, VegetableRepository } from "../../domain/model/Vegetable";
import { Query } from "../../core";

export class GetVegetablesQuery implements Query<undefined, Vegetable[]> {
  private repository: VegetableRepository;

  constructor(vegetableRepository: VegetableRepository) {
    this.repository = vegetableRepository;
  }

  execute(param: undefined): Vegetable[] {
    return this.repository.list();
  }
}
