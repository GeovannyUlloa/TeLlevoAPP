import { Component, inject, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);

  username: string | null = '';
  password: string | null = '';

  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

  user(): User {
    return this.utilsService.getLocalStorage('user');
  }

}
