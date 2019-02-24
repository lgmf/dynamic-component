import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss', '../../../objects.scss']
})
export class Step1Component {

  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required]
  });

  public value$ = this.form.valueChanges;

  constructor(private fb: FormBuilder) { }

}
