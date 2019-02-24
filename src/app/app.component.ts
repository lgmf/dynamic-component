import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RxjsStore } from './store/rxjs-store';
import { Step1Component, Step2Component, FinishComponent } from './shared';

interface Step {
  title: string;
  component: any;
}

interface AppState {
  steps: Step[];
  currentStep: Step;
  data: any;
}

const initialState: AppState = {
  steps: [
    {
      title: 'Personal Info',
      component: Step1Component,
    },
    {
      title: 'Contact',
      component: Step2Component,
    },
    {
      title: 'Finish',
      component: FinishComponent,
    },
  ],
  currentStep: {
    title: 'Personal Info',
    component: Step1Component
  },
  data: null
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends RxjsStore<AppState> {

  index = 0;
  data = null;

  constructor() {
    super(initialState);
  }

  get isLast() {
    return this.index === this.state.steps.length - 1;
  }

  get isFirst() {
    return this.index === 0;
  }

  previous() {
    if (this.isFirst) {
      return;
    }

    const previousStep = this.state.steps[--this.index];
    this.setState('currentStep', previousStep);
  }

  next() {
    if (this.isLast) {
      return;
    }

    const nextStep = this.state.steps[++this.index];

    this.setState('currentStep', nextStep);
    this.setState('data', this.data);
  }

  onValueChanged(value: any) {
    this.data = {
      ...this.data,
      ...value
    };
  }
}
