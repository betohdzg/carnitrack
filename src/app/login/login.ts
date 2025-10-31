import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  currentRole: string = 'empleados';
  usuario: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  selectRole(role: string) {
    this.currentRole = role;
  }

  login() {
    if (!this.usuario || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }
    this.authService.setRole(this.currentRole);
    alert(`Iniciando sesión como ${this.currentRole}...`);
    this.router.navigate(['/dashboard']);
  }
}