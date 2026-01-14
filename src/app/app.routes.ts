import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { VerProductosEmpComponent } from './ver-productos-emple/ver-productos-emple';
import { SalidaProductoComponent } from './salida-producto/salida-producto';
import { ReporteVentasComponent } from './reporte-ventas/reporte-ventas';
import { VerProductosGerenComponent } from './ver-producto-geren/ver-producto-geren';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta';
import { EntradaComponent } from './entrada-productos/entrada-productos';
import { CuentasEmpleadosComponent } from './cuentas-empleadoss/cuentas-empleadoss';
import { CrudEmpleadosComponent } from './crud-empleados/crud-empleados';
import { BonosExtrasNomComponent } from './bono-extras-nom/bono-extras-nom';
import { CalcularNominaComponent } from './calcular-nomina/calcular-nomina';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirección a login como primera prioridad
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ver-productos-emple', component: VerProductosEmpComponent },
  { path: 'salida-producto', component: SalidaProductoComponent },
  { path: 'reporte-ventas', component: ReporteVentasComponent },
  { path: 'ver-productos-geren', component: VerProductosGerenComponent },
  { path: 'entrada-productos', component: EntradaComponent },
  { path: 'mi-cuenta', component: MiCuentaComponent },
  { path: 'cuentas-empleadoss', component: CuentasEmpleadosComponent },
  { path: 'crud-empleados', component: CrudEmpleadosComponent},
  { path: 'bono-extras-nom', component: BonosExtrasNomComponent},
  { path: 'calcular-nomina', component: CalcularNominaComponent},
  { path: '**', redirectTo: '/login' } // Ruta comodín para errores
];