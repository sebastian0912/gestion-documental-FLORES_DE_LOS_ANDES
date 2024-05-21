import { Component } from '@angular/core';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NavbarLateralComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
