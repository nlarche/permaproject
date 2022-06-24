import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../../../../../../domain/model/Vegetable';
import { VegetablesService } from '../vegetables.service';

@Component({
  selector: 'app-vegetable-form',
  templateUrl: './vegetable-form.component.html',
  styleUrls: ['./vegetable-form.component.css'],
})
export class VegetableFormComponent implements OnInit {
  vegetable: Pick<Vegetable, 'name'> = { name: '' };

  private _vegetablesService: VegetablesService;

  constructor(vegetablesService: VegetablesService) {
    this._vegetablesService = vegetablesService;
  }

  ngOnInit(): void {}

  onSubmit() {
    this._vegetablesService.add(this.vegetable);
    this.vegetable = { name: '' };
  }
}
