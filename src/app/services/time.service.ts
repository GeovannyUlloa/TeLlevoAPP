import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  http = inject(HttpClient);

  private horaSubject = new BehaviorSubject<string>(''); // Observable para la hora sincronizada
  hora$ = this.horaSubject.asObservable();

  private offset = 0; // Diferencia entre la hora local y la hora del servidor (en ms)

  constructor() {
    this.sincronizarHora();
    setInterval(() => this.actualizarHoraLocal(), 1000); // Actualizar en tiempo real
  }

  private sincronizarHora() {
    const url = 'https://worldtimeapi.org/api/timezone/America/Santiago';
    this.http.get<{ datetime: string }>(url).subscribe(
      (data) => {
        const servidorFecha = new Date(data.datetime).getTime();
        const localFecha = Date.now();
        this.offset = servidorFecha - localFecha; // Calcular diferencia (ms)
        this.actualizarHoraLocal(); // Actualizar inmediatamente después de sincronizar
      },
      (error) => {
        console.error('Error al sincronizar la hora:', error);
      }
    );
  }

  private actualizarHoraLocal() {
    const ahora = new Date(Date.now() + this.offset); // Ajustar con el offset
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    this.horaSubject.next(`${horas}:${minutos}`); // Actualizar el observable
  }
}
