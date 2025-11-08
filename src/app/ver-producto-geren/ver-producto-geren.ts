import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth'; // Asegúrate de importar el servicio de autenticación

@Component({
  selector: 'app-ver-productos-geren',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ver-producto-geren.html',
  styleUrls: ['./ver-producto-geren.css']
})
export class VerProductosGerenComponent {
  menuActive: boolean = false;
  submenuActive: boolean = false;
  isGerente: boolean = false;
  rows: any[] = [
    { id: 1, tipo: 'Res', nombre: 'Filete', venta: 'Sí', precio: '$12.50', stock: '100 kg', estado: 'Disponible', entrada: '15 Oct 2025', caducidad: '15 Nov 2025' },
    { id: 2, tipo: 'Cerdo', nombre: 'Costilla', venta: 'Sí', precio: '$9.75', stock: '80 kg', estado: 'Disponible', entrada: '10 Oct 2025', caducidad: '10 Nov 2025' },
  ];
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


  agregarProducto() {
    // Lógica para agregar producto (a implementar)
  }

  editarProducto(id: number) {
    // Placeholder para editar (a implementar con navegación o formulario)
    alert(`Editar producto con ID: ${id}`);
  }

  borrarProducto(id: number) {
    // Placeholder para borrar (a implementar con confirmación y backend)
    alert(`Borrar producto con ID: ${id}`);
  }


}