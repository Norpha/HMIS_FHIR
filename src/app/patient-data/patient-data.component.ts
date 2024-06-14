import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrl: './patient-data.component.css'
})
export class PatientDataComponent {
  form: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      age: [''],
      gender: [''],
      residence: [''],
      HPI: ['']
    });
  }

  // onSubmit(): void {
  //   console.log(this.form.value);
  // }

}
