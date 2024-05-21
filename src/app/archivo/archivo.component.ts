import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarLateralComponent } from '../navbar-lateral/navbar-lateral.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-archivo',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarLateralComponent, NgxExtendedPdfViewerModule],
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent {
  public isMenuVisible = false;
  pdfUrls: string[] = [
    '../../assets/1Plan_Estudios_Nuevo (1).pdf',
    '../../assets/Certificado - Curso Profesional de Angular.pdf',
    '../../assets/CvSebastianGuarnizoCampos.pdf'
  ]; // Añade aquí las URLs de tus PDFs

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  currentRoute: string | undefined;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  showInventarioSubmenu = false;

  toggleInventario() {
    this.showInventarioSubmenu = !this.showInventarioSubmenu;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfUrls.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
