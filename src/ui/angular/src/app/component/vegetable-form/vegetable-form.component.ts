import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../../../../../../domain/model/Vegetable';
import { VegetablesService } from '../vegetables.service';
import { ErrorService } from '../error.service';
import { BehaviorSubject, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-vegetable-form',
  templateUrl: './vegetable-form.component.html',
  styleUrls: ['./vegetable-form.component.css'],
})
export class VegetableFormComponent implements OnInit {
  vegetable: Pick<Vegetable, 'name'> = { name: '' };
  error!: Observable<unknown>;
  submit$: BehaviorSubject<any> = new BehaviorSubject('');

  private _vegetablesService: VegetablesService;
  private _errorService: ErrorService;

  constructor(
    vegetablesService: VegetablesService,
    errorService: ErrorService
  ) {
    this._vegetablesService = vegetablesService;
    this._errorService = errorService;
  }

  ngOnInit(): void {
    this.error = merge(this._errorService.getErrors(), this.submit$);
  }

  onSubmit() {
    this._vegetablesService.add(this.vegetable);
    this.vegetable = { name: '' };
    this.submit$.next('');
  }
}
