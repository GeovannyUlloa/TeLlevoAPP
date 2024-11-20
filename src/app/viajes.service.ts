import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private usuario = {
    nombre: 'Usuario Actual',
    contraseña: '',
  };

  private viajes: any[] = [
    {
      destino: 'Coihue',
      conductor: 'Juan Pérez',
      fecha: '2024-09-25',
      hora: '18:30',
      puntoEncuentro: 'Entrada del Campus',
      pasajerosActuales: 2,
      pasajerosMaximos: 4
    },
    {
      destino: 'Coihue',
      conductor: 'María López',
      fecha: '2024-09-26',
      hora: '19:00',
      puntoEncuentro: 'Entrada del Campus',
      pasajerosActuales: 1,
      pasajerosMaximos: 3
    },
    {
      destino: 'Angol',
      conductor: 'Pedro García',
      fecha: '2024-09-27',
      hora: '18:15',
      puntoEncuentro: 'Cafetería',
      pasajerosActuales: 0,
      pasajerosMaximos: 4
    }
  ];

  agregarViaje(viaje: any) {
    this.viajes.push(viaje);
    console.log('Viaje agregado:', viaje); 
  }

  obtenerViajes() {
    return this.viajes;
  }

  obtenerDatosUsuario() {
    return this.usuario;
  }

  actualizarUsuario(nuevosDatos: { nombre: string; contraseña: string }) {
    this.usuario.nombre = nuevosDatos.nombre;
    if (nuevosDatos.contraseña) {
      this.usuario.contraseña = nuevosDatos.contraseña;
    }
  }
}
