import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { eventBus } from '../hexagone';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errors$ = new BehaviorSubject(undefined);

  constructor() {
    eventBus.subscribe('error', (payload) =>
      this.errors$.next(payload.message)
    );
  }

  getErrors() {
    return this.errors$;
  }
}
