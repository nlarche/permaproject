import {
  Vegetable,
  VegetableId,
  VegetableRepository,
} from "../model/Vegetable";
import { Query } from "../../core";

export class GetVegetableQuery implements Query<VegetableId, Vegetable> {
  private vegetableRepository: VegetableRepository;

  constructor(vegetableRepository: VegetableRepository) {
    this.vegetableRepository = vegetableRepository;
  }

  execute(vegetableId: VegetableId): Promise<Vegetable> {
    return this.vegetableRepository.get(vegetableId);
  }
}
