import { Injectable } from '@angular/core';
import { eventBus, handleCommand, handleQuery } from '../hexagone';
import { BehaviorSubject, from, Observable, switchMap } from 'rxjs';
import { Vegetable } from '../../../../../domain/model/Vegetable';
import type { RemoveVegetable } from '../../../../../domain/command/RemoveVegetable';
import type { AddVegetable } from '../../../../../domain/command/AddVegetable';
import type { ListVegetablesQuery } from '../../../../../domain/query/ListVegetablesQuery';

@Injectable({
  providedIn: 'root',
})
export class VegetablesService {
  private refresh = new BehaviorSubject(undefined);
  private list$ = this.refresh.pipe(
    switchMap(() =>
      from(handleQuery<ListVegetablesQuery>('ListVegetablesQuery', undefined))
    )
  );

  constructor() {
    eventBus.subscribe('added', () => this.refresh.next(undefined));
    eventBus.subscribe('removed', () => this.refresh.next(undefined));
  }

  getList(): Observable<Vegetable[]> {
    return this.list$;
  }

  add(vegetable: Pick<Vegetable, 'name'>) {
    handleCommand<AddVegetable>('AddVegetable', vegetable);
  }

  remove(vegetable: Vegetable) {
    handleCommand<RemoveVegetable>('RemoveVegetable', vegetable.id);
  }
}
