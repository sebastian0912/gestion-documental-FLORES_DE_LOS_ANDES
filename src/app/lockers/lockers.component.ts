import { Component } from '@angular/core';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';

@Component({
  selector: 'app-lockers',
  standalone: true,
  imports: [NavbarLateralComponent],
  templateUrl: './lockers.component.html',
  styleUrl: './lockers.component.css'
})
export class LockersComponent {

}
