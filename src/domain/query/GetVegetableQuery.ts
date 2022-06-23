import {
  Maturity,
  Vegetable,
  VegetableId,
  VegetableRepository,
  VegetableView,
} from "../model/Vegetable";
import { PermaUtils, Query } from "../../core";

export class GetVegetableQuery implements Query<VegetableId, VegetableView> {
  private vegetableRepository: VegetableRepository;
  private permaUtils: PermaUtils;

  constructor(
    vegetableRepository: VegetableRepository,
    permaUtils: PermaUtils
  ) {
    this.vegetableRepository = vegetableRepository;
    this.permaUtils = permaUtils;
  }

  mapToView(vegetable: Vegetable): VegetableView {
    return {
      id: vegetable.id,
      name: vegetable.name,
      maturity: this.computeMaturity(vegetable.seedingDate),
    };
  }

  private computeMaturity(seedingDate: number): Maturity {
    const today = this.permaUtils.getNewDate();
    const diff = Math.abs(today - seedingDate);
    if (diff <= 1) return "JUVENILE";
    if (diff <= 10) return "GROWING";
    if (diff <= 100) return "READY";
    if (diff <= 150) return "DYING";
    return "DEAD";
  }

  async execute(vegetableId: VegetableId): Promise<VegetableView> {
    const vegetable = await this.vegetableRepository.get(vegetableId);
    return this.mapToView(vegetable);
  }
}
