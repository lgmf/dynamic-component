import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { DynamicComponent } from './dynamic/dynamic.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { FinishComponent } from './finish/finish.component';

@NgModule({
  declarations: [
    DynamicComponent,
    Step1Component,
    Step2Component,
    FinishComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
    Step1Component,
    Step2Component,
    FinishComponent
  ],
  exports: [
    DynamicComponent,
    Step1Component,
    Step2Component,
    FinishComponent
  ]
})
export class SharedModule { }
