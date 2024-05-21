import { Component } from '@angular/core';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarLateralComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
