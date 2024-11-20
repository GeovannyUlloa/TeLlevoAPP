import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViajesService } from '../../../viajes.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent {
  usuario = {
    nombre: '',
    contraseña: '',
  };

  constructor(private viajesService: ViajesService, private router: Router) {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    const datos = this.viajesService.obtenerDatosUsuario();
    this.usuario.nombre = datos.nombre;
  }

  guardarCambios() {
    this.viajesService.actualizarUsuario(this.usuario);
    this.router.navigate(['/main/profile']);
  }
}
