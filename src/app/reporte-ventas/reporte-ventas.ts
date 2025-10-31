import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-reporte-ventas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './reporte-ventas.html',
  styleUrls: ['./reporte-ventas.css']
})
export class ReporteVentasComponent {
  menuActive: boolean = false;
  submenuActive: boolean = false;
  isGerente: boolean = false;
  rows: any[] = [
    { id: 1, tipo: 'Res', nombre: 'Filete', precio: '$12.50', estado: '1.5kg', entrada: '15 Oct 2025', caducidad: '$55.50' },
{ id: 2, tipo: 'Pollo', nombre: 'Pechuga', precio: '$120.00', estado: '2.70kg', entrada: '17 Oct 2025', caducidad: '$130.50' }  ];
  filteredRows: any[] = [];
  searchQuery: string = '';

  constructor(private router: Router, private authService: AuthService) {
    this.isGerente = this.authService.isGerente();
  }

  ngOnInit() {
    this.filteredRows = [...this.rows];
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

  filterTable() {
    const filter = this.searchQuery.toLowerCase();
    this.filteredRows = this.rows.filter(row =>
      Object.values(row).some(value => {
        if (value === null || value === undefined) return false;
        return value.toString().toLowerCase().includes(filter);
      })
    );
  }
}