import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';



@Injectable({
  providedIn: 'root',
})
export class CreateFormsService {

  private _fb: FormBuilder = new FormBuilder();
  private _fb1 = inject(FormBuilder);
  testForm: FormsModule = new FormsModule();

  constructor(private _formBuilder :FormBuilder) { }

  createregistrationForm() {
    return this._fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  createLoginForm(){
    return this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  createStdRegForm(){
    return this._fb.group({
      firstName: ['', [Validators.required]],
      middleName:['', Validators.required],
      lastName: ['', Validators.required],
      class:['', Validators.required],
      schoolName:['', Validators.required],
      totalFees:['', Validators.required],
      paidFees:['', Validators.required],
      remainingFees:['', Validators.required],
    })
  }
}
