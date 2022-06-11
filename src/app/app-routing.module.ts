import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './heroes/pages/login/login.component';
import { RegisterComponent } from './heroes/pages/register/register.component';
import { ListadoComponent } from './heroes/pages/listado/listado.component';
import { BuscarComponent } from './heroes/pages/buscar/buscar.component';

const rutas: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '**', redirectTo: 'login' },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(rutas)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
