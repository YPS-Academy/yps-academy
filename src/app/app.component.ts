import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginSignupComponent } from "./components/login-signup/login-signup.component";
import { DevProgressMessageComponent } from "./components/dev-progress-message/dev-progress-message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeroComponent, FooterComponent, LoginSignupComponent, DevProgressMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yps-academy';
}
