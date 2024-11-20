import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  http = inject(HttpClient);

  constructor() { }

  obtenerHoraChile():Observable<any> {
    const url = 'https://worldtimeapi.org/api/timezone/America/Santiago';
    return this.http.get<any>(url);
  }

}
