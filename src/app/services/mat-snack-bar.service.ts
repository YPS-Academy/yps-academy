import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class MatSnackBarService {
  private _snackBar = inject(MatSnackBar);

  constructor() { }


  openSnackBar(message: string, action: string,duration: number = 5000) {
    this._snackBar.open(message, action, {duration: duration});
  }

}
