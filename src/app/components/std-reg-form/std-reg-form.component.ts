import { Component } from '@angular/core';
import { CreateFormsService } from '../../services/create-forms.service';
import { FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-std-reg-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatSnackBarModule],
  templateUrl: './std-reg-form.component.html',
  styleUrl: './std-reg-form.component.scss'
})
export class StdRegFormComponent {
  public stdRegForm!:FormGroup
  constructor(private _createFormService: CreateFormsService){
    this.stdRegForm = this._createFormService.createStdRegForm();
  }

  public ngOnInit(){

  }
  public onStdRegSubmit(){
    console.log(this.stdRegForm.value);
  }
}
