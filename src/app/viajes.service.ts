import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private usuario = {
    nombre: 'Usuario Actual',
    contraseña: '',
  };

  // private viajes: any[] = [
  //   {
  //     destino: 'Coihue',
  //     conductor: 'Juan Pérez',
  //     fecha: '2024-09-25',
  //     hora: '18:30',
  //     puntoEncuentro: 'Entrada del Campus',
  //     pasajerosActuales: 2,
  //     pasajerosMaximos: 4
  //   },
  //   {
  //     destino: 'Coihue',
  //     conductor: 'María López',
  //     fecha: '2024-09-26',
  //     hora: '19:00',
  //     puntoEncuentro: 'Entrada del Campus',
  //     pasajerosActuales: 1,
  //     pasajerosMaximos: 3
  //   },
  //   {
  //     destino: 'Angol',
  //     conductor: 'Pedro García',
  //     fecha: '2024-09-27',
  //     hora: '18:15',
  //     puntoEncuentro: 'Cafetería',
  //     pasajerosActuales: 0,
  //     pasajerosMaximos: 4
  //   }
  // ];

  firestore = inject(AngularFirestore);
  viajes: any;

  // obtenerViajes() {
  //   return this.viajes;
  // }

  obtenerViajes(): Observable<any[]> {
    return this.firestore.collection('viajes').valueChanges();  // "viajes" es el nombre de la colección
  }

  agregarViaje(viaje: any) {
    this.firestore.collection('viajes').add(viaje).then(() => {
      console.log('Viaje agregado con éxito');
    }).catch(error => {
      console.error('Error al agregar viaje:', error);
    });
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
