import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
})
export class HeroComponent implements OnInit {
  title:string = 'Welcome to YPS Academy';
  description:string = 'We chase the knowledge and Make the Success to Chase Us';
  constructor() { }
  ngOnInit(): void { }
}
