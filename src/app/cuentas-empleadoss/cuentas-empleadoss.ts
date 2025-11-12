import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth';


@Component({
  selector: 'app-cuentas-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cuentas-empleadoss.html',
  styleUrls: ['./cuentas-empleadoss.css']
})
export class CuentasEmpleadosComponent  {
 menuActive: boolean = false;
  movimientosActive: boolean = false;
  nominaActive: boolean = false;
  isGerente: boolean = false;
  rows: any[] = [
    { id_trb: 1, nom_trb: 'Juan Pérez', puesto: 'Cajero', sal_base: 8500.00, user_trb: 'juan123', psw_trb: 'pass123' },
    { id_trb: 2, nom_trb: 'María López', puesto: 'Carnicero', sal_base: 9500.00, user_trb: 'maria456', psw_trb: 'pass456' },
    { id_trb: 3, nom_trb: 'Pedro Gómez', puesto: 'Limpieza', sal_base: 7000.00, user_trb: 'pedro789', psw_trb: 'pass789' }
  ];
  filteredEmpleados: any[] = [];
  searchQuery: string = '';
 constructor(private router: Router, private authService: AuthService) {
    this.isGerente = this.authService.isGerente();
  }

  ngOnInit() {
    this.filteredEmpleados = [...this.rows];
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  toggleMovimientos() {
    this.movimientosActive = !this.movimientosActive;
    // Opcional: cerrar el otro
    this.nominaActive = false;
  }

  toggleNomina() {
    this.nominaActive = !this.nominaActive;
    // Opcional: cerrar el otro
    this.movimientosActive = false;
  }


  editarEmpleado(id: number) {
    // Placeholder para editar (a implementar con navegación o formulario)
    alert(`Editar producto con ID: ${id}`);
  }

  eliminarEmpleado(id: number) {
    // Placeholder para borrar (a implementar con confirmación y backend)
    alert(`Borrar producto con ID: ${id}`);
  }
  filterTable() {
    const filter = this.searchQuery.toLowerCase();
    this.filteredEmpleados = this.rows.filter(emp =>
      Object.values(emp).some(value => {
        if (value === null || value === undefined) return false;
        return value.toString().toLowerCase().includes(filter);
      })
    );
  }
  logout() {
    this.authService.logout();
    alert('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}