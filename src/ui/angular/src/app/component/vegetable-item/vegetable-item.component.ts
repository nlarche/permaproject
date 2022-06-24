import { Component, Input } from '@angular/core';
import { Vegetable } from '../../../../../../domain/model/Vegetable';
import { VegetablesService } from '../vegetables.service';

@Component({
  selector: 'app-vegetable-item',
  templateUrl: './vegetable-item.component.html',
  styleUrls: ['./vegetable-item.component.css'],
})
export class VegetableItemComponent {
  @Input() vegetable!: Vegetable;

  private _vegetablesService: VegetablesService;

  constructor(vegetablesService: VegetablesService) {
    this._vegetablesService = vegetablesService;
  }

  remove(vegetable: Vegetable) {
    this._vegetablesService.remove(vegetable);
  }
}
