import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBarService } from '../../services/mat-snack-bar.service';
import { CreateFormsService } from '../../services/create-forms.service';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatSnackBarModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent implements OnInit {

  userHasAccount = false;




  registrationForm!: FormGroup;
  loginForm!: FormGroup;

  errorMessage = signal('');
  private _matSnackBarService = inject(MatSnackBarService);
  private _createFormsService = inject(CreateFormsService);
  private _loginService = inject(LoginService);

  constructor(private _router: Router) {
    this.registrationForm = this._createFormsService.createregistrationForm();
    this.loginForm = this._createFormsService.createLoginForm();
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.userHasAccount) {
      if (this.registrationForm.valid) {

        console.log(this.registrationForm.value);
        this._loginService.registerUser(this.registrationForm.value).subscribe((res) => {
          if (res) {
            // this._router.navigate(['/stud-dashboard']);
            this._matSnackBarService.openSnackBar('User registered succesfully', 'Close');
          }
        });
      }else {
        this.errorMessage = signal('Please enter All details');
      }
      
     
    }  else {

      console.log(this.loginForm.value);
      if(this.loginForm.valid) {
      this._loginService.loginUser(this.loginForm.value)
      // .subscribe((res:any) => {
      //   if(res) {
      //     this._router.navigate(['/stud-dashboard']);
      //     this._matSnackBarService.openSnackBar('User logged in succesfully', 'Close');
      //   }
      // });
      }else{
        this.errorMessage = signal('Please enter All details');

      }
    }
  }

  onCancel() {
    this._router.navigate(['/']);
  }



  email() {
    return this.registrationForm.get('email');
  }
  password() {
    return this.registrationForm.get('password');
  }
  mobile() {
    return this.registrationForm.get('mobile');
  }
  name() {
    return this.registrationForm.get('name');
  }

}
