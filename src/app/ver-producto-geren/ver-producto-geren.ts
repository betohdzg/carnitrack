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
  searchQuery: string = '';
  filteredRows: any[] = []; // Ajusta según tus datos (puedes simular datos aquí si quieres)

  constructor(private router: Router, private authService: AuthService) {
    // Simulación de datos (reemplaza con tu servicio cuando haya backend)
    this.filteredRows = [
      { id: 1, tipo: 'Res', nombre: 'Carne Molida', venta: '1 kg', precio: '$50.00', stock: 10, estado: 'Disponible', entrada: '2025-10-01', caducidad: '2025-11-01' },
      { id: 2, tipo: 'Pollo', nombre: 'Pechuga', venta: '0.5 kg', precio: '$30.00', stock: 5, estado: 'Disponible', entrada: '2025-10-02', caducidad: '2025-10-31' },
    ];
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  toggleSubmenu() {
    this.submenuActive = !this.submenuActive;
  }

  filterTable() {
    // Lógica de filtrado (a implementar cuando haya backend)
    // Por ahora, no hace nada
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

  logout() {
    this.authService.logout();
    alert('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}