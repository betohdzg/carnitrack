import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-salida-producto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './salida-producto.html',
  styleUrls: ['./salida-producto.css']
})
export class SalidaProductoComponent {
  menuActive: boolean = false;
  submenuActive: boolean = false;
  isGerente: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.isGerente = this.authService.isGerente();
  }
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  toggleSubmenu() {
    this.submenuActive = !this.submenuActive;
  }
  
    logout() {
    this.authService.logout();
    alert('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}