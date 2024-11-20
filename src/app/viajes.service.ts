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

  firestore = inject(AngularFirestore);
  viajes: any;

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
