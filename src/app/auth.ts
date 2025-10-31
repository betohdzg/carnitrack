import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Disponible en toda la app
})
export class AuthService {
  private currentRole: string | null = null;  // Almacena el rol ('gerente' o 'empleados')

  setRole(role: string) {
    this.currentRole = role;
    localStorage.setItem('role', role);  // Persiste en localStorage (simulado, borra al cerrar navegador)
  }

  getRole(): string | null {
    if (!this.currentRole) {
      this.currentRole = localStorage.getItem('role');  // Recupera si existe
    }
    return this.currentRole;
  }

  isGerente(): boolean {
    return this.getRole() === 'gerente';
  }

  logout() {
    this.currentRole = null;
    localStorage.removeItem('role');
  }
}