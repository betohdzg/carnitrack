import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth';
import { ProductoService } from '../services/producto';

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './entrada-productos.html',
  styleUrls: ['./entrada-productos.css']
})
export class EntradaComponent implements AfterViewInit {
  menuActive = false;
  movimientosActive = false;
  nominaActive = false; 
  isGerente = false;

  // Datos del formulario
  producto: any = {
    id_producto: '',
    nombre: '',
    tipo_carne: '',
    precio_kg: 0,
    stock_kg: 0,
    fecha_entrada: '',
    fecha_caducidad: ''
  };

  @ViewChild('successModal') successModal!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  @ViewChild('acceptButton') acceptButton!: ElementRef;

  constructor(
    private router: Router,
    private authService: AuthService,
    private productoService: ProductoService
  ) {
    this.isGerente = this.authService.isGerente();
  }

  ngAfterViewInit() {
    this.closeBtn.nativeElement.addEventListener('click', () => {
      this.successModal.nativeElement.style.display = 'none';
    });
    this.acceptButton.nativeElement.addEventListener('click', () => {
      this.successModal.nativeElement.style.display = 'none';
    });
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

  logout() {
    this.authService.logout();
    alert('Cerrando sesión...');
    this.router.navigate(['/login']);
  }

  guardarProducto(event: Event) {
    event.preventDefault();

    if (!this.producto.id_producto || !this.producto.nombre || !this.producto.tipo_carne) {
      alert('Completa los campos obligatorios');
      return;
    }

    this.productoService.guardarProducto(this.producto).subscribe({
      next: () => {
        this.mostrarModal();
        this.limpiarFormulario();
      },
      error: (err) => {
        console.error(err);
        alert('Error al guardar');
      }
    });
  }

  mostrarModal() {
    this.successModal.nativeElement.style.display = 'block';
  }

  limpiarFormulario() {
    this.producto = {
      id_producto: '',
      nombre: '',
      tipo_carne: '',
      precio_kg: 0,
      stock: 0,
      fecha_entrada: '',
      fecha_caducidad: ''
    };
  }
}