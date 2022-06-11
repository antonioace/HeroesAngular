import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarios: Usuario[] = [];

  constructor() {}

  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  /*  iniciarSesion(email: string, contrasenia: string) {
    for (let usuario of this.usuarios) {
      if (usuario.email == email && usuario.contrasenia == contrasenia) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
      }
    }
  } */
}
