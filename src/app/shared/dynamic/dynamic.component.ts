import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
  OnDestroy
} from '@angular/core';
import { Subject, isObservable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic',
  template: '<ng-container #container></ng-container>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent implements OnDestroy {

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  set is(component: any) {
    this.create(component);
  }

  @Input()
  set watch(property: string) {
    this.watchChangesOn(property);
  }

  @Output()
  propertyChanged = new EventEmitter();

  private destroyed$ = new Subject<void>();
  private componentInstance = null;

  constructor(private factory: ComponentFactoryResolver) { }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private create(component: any) {
    this.container.clear();
    const componentFactory = this.factory.resolveComponentFactory(component);
    this.componentInstance = this.container.createComponent(componentFactory).instance;
  }

  private watchChangesOn(property: string) {
    const propertyToWatch = this.componentInstance[property];

    if (!propertyToWatch) {
      return;
    }

    if (!isObservable(propertyToWatch)) {
      throw new Error(`Can not watch property ${this.watch} because it is not an observable`);
    }

    propertyToWatch
      .pipe(takeUntil(this.destroyed$))
      .subscribe(changes => this.notify(changes));
  }

  private notify(changes: any) {
    this.propertyChanged.emit(changes);
  }

}
