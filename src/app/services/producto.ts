import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id_producto?: string;
  nombre: string;
  tipo_carne: 'res' | 'pollo' | 'pescado';
  precio_kg: number;
  stock: number;
  fecha_entrada: string;
  fecha_caducidad: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos'; // Tu API

  constructor(private http: HttpClient) { }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }
}