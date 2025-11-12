import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-crud-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './crud-empleados.html',
  styleUrls: ['./crud-empleados.css']
})
export class CrudEmpleadosComponent implements AfterViewInit {
  menuActive = false;
  movimientosActive = false;
  nominaActive = false;
  isGerente = false;

  // Datos del empleado
  empleado = {
    nombre: '',
    puesto: '',
    salario_base: 0,
    usuario: '',
    password: '',
    rol: 'empleado' as 'gerente' | 'empleado'
  };

  // Referencias al modal
  @ViewChild('successModal') successModal!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  @ViewChild('acceptButton') acceptButton!: ElementRef;

  constructor(
    private router: Router,
    private authService: AuthService,
    
  ) {
    this.isGerente = this.authService.isGerente();
  }

  ngAfterViewInit() {
    // Cerrar modal con X
    this.closeBtn.nativeElement.addEventListener('click', () => {
      this.successModal.nativeElement.style.display = 'none';
    });

    // Cerrar modal con Aceptar
    this.acceptButton.nativeElement.addEventListener('click', () => {
      this.successModal.nativeElement.style.display = 'none';
    });
  }

  // Menú
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

// Submenús independientes
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

  logout() {
    this.authService.logout();
    alert('Cerrando sesión...');
    this.router.navigate(['/login']);
  }

  // Guardar empleado
  guardarEmpleado(event: Event) {
    event.preventDefault();

    // Validación básica
    if (!this.empleado.nombre || !this.empleado.usuario || !this.empleado.password || !this.empleado.puesto) {
      alert('Completa todos los campos obligatorios');
      return;
    }

    if (this.empleado.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Enviar al backend (cuando lo tengas)
    /*this.empleadoService.crearEmpleado(this.empleado).subscribe({
      next: (res) => {
        this.mostrarModal();
        this.limpiarFormulario();
        console.log('Empleado creado:', res);
      },
      error: (err) => {
        console.error('Error al crear empleado:', err);
        alert('Error al guardar el empleado. Revisa la consola.');
      }
    });
  }

  mostrarModal() {
    this.successModal.nativeElement.style.display = 'block';
  }

  limpiarFormulario() {
    this.empleado = {
      nombre: '',
      puesto: '',
      salario_base: 0,
      usuario: '',
      password: '',
      rol: 'empleado'
    };
  }*/
}
}