import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    BuscarComponent,
    ListadoComponent,

    ImagenPipe,
    HeroeCardComponent,
  ],

  exports: [
    LoginComponent,
    RegisterComponent,
    BuscarComponent,
    ListadoComponent,

    ImagenPipe,
    HeroeCardComponent,
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule],
})
export class HeroeModule {}
