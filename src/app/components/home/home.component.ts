import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { OurResultComponent } from '../our-result/our-result.component';
import { ITopperStudent } from '../../models/topperStudents';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, OurResultComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  topperStudents: Array<ITopperStudent> = [
    {
      id: 1,
      image_url: 'https://plus.unsplash.com/premium_photo-1682955296267-4bae7935ac62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      name : 'John Doe',
      score: 90,
      passoutYear: 2020
    },
    {
      id: 1,
      image_url: 'https://plus.unsplash.com/premium_photo-1682955296267-4bae7935ac62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      name : 'John Doe',
      score: 90,
      passoutYear: 2020
    },
    {
      id: 1,
      image_url: 'https://plus.unsplash.com/premium_photo-1682955296267-4bae7935ac62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      name : 'John Doe',
      score: 90,
      passoutYear: 2020
    }
  ]
}
