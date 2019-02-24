import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export class RxjsStore<T> {
  private _state$ = new BehaviorSubject<T>(this.initialState);

  public state$ = this._state$.asObservable().pipe(
    distinctUntilChanged()
  );

  constructor(private initialState: T) { }

  get state(): T {
    return this._state$.value;
  }

  setState(property: keyof T, value: any) {
    const updated = Object.assign({}, this.state, {
      [property]: value
    });

    this._state$.next(updated);
  }
}
