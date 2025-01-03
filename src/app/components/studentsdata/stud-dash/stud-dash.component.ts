import { Component } from '@angular/core';
import { StudFormComponent } from '../stud-form/stud-form.component';
import { StudTableComponent } from '../stud-table/stud-table.component';

@Component({
  selector: 'app-stud-dash',
  standalone: true,
  imports: [StudFormComponent,StudTableComponent],
  templateUrl: './stud-dash.component.html',
  styleUrl: './stud-dash.component.scss'
})
export class StudDashComponent {

}
