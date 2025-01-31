import { Component, Input } from '@angular/core';
import { ITopperStudent } from '../../models/topperStudents';
import {MatCardModule} from '@angular/material/card'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-our-result',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './our-result.component.html',
  styleUrl: './our-result.component.scss'
})
export class OurResultComponent {
@Input() Students!:ITopperStudent;
  
}
