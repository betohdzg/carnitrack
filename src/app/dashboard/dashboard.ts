import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  menuActive: boolean = false;
  submenuActive: boolean = false;
  isGerente: boolean = false;
  productos: any[] = []; // Ajusta según tu servicio de datos

  constructor(private router: Router, private authService: AuthService) {
    this.isGerente = this.authService.isGerente();
    // Simulación de datos, reemplaza con tu servicio
    this.productos = [
      { nombre_producto: 'Producto 1', precio: 10.50, cantidad: 20, foto_url: 'url1' },
      { nombre_producto: 'Producto 2', precio: 15.00, cantidad: 5, foto_url: 'url2' },
      { nombre_producto: 'Producto 3', precio: 55.00, cantidad: 15, foto_url: 'ur3' },
    ];
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

  getStockClass(cantidad: number): string {
    if (cantidad > 15) return 'stock-verde';
    if (cantidad >= 6 && cantidad <= 15) return 'stock-amarillo';
    return 'stock-rojo';
  }

}