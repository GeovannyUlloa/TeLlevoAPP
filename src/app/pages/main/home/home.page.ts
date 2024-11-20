import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajesService } from '../../../viajes.service';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);

  username: string |null = '';
  viajes: any[] = [];

  constructor(private viajesService: ViajesService, private router: Router) {}

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.cargarViajes();
  }

  cargarViajes() {
    this.viajes = this.viajesService.obtenerViajes();
  }

  addTrip() {
    this.router.navigate(['/add-trip']);
  }

  user(): User {
    return this.utilsService.getLocalStorage('user');
  }

}
