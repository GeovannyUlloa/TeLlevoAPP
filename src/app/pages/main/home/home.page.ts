import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajesService } from '../../../viajes.service';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);

  username: string | null = '';
  viajes: any[] = []; // Lista para almacenar los viajes

  horaChile: string = '';  // Variable para almacenar la hora

  private timeService = inject(TimeService);

  constructor(private viajesService: ViajesService, private router: Router) { }

  ngOnInit() {
    this.cargarViajes();
    this.timeService.hora$.subscribe(hora => {
      this.horaChile = hora;
    })
  }

  cargarViajes() {
    this.viajesService.obtenerViajes().subscribe(viajes => {
      this.viajes = viajes; // Actualizamos la lista de viajes con los datos obtenidos
    });
  }

  addTrip() {
    this.router.navigate(['/main/add-trip']);
  }

  user(): User {
    return this.utilsService.getLocalStorage('user');
  }
}
