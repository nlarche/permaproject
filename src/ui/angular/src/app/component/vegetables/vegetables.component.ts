import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vegetable } from '../../../../../../domain/model/Vegetable';
import { VegetablesService } from '../vegetables.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css'],
})
export class VegetablesComponent implements OnInit {
  list$!: Observable<Vegetable[]>;
  private _vegetablesService: VegetablesService;

  constructor(vegetablesService: VegetablesService) {
    this._vegetablesService = vegetablesService;
  }

  ngOnInit(): void {
    this.list$ = this._vegetablesService.getList();
  }
}
