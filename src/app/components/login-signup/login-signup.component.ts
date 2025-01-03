import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSnackBarService } from '../../services/mat-snack-bar.service';



@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,MatButtonModule,MatCardModule,MatSnackBarModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage = signal('');
  private _fb: FormBuilder = new FormBuilder();
  private _matSnackBarService = inject(MatSnackBarService);
  
  constructor(private _router: Router) { 
    this.creatLoginForm();
  }

  ngOnInit(): void {    
  
  }
  creatLoginForm(){
   this.loginForm = this._fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }

  onSubmit(){   
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this._router.navigate(['/stud-dashboard']);
      this._matSnackBarService.openSnackBar('Login Successful','Close');

    }else{
      this.errorMessage = signal('Please enter valid email and password');
  }
}

  onCancel(){
    this._router.navigate(['/']);
  }

  

  email(){
    return this.loginForm.get('email');
  }
  password(){
    return this.loginForm.get('password');
  }

}
