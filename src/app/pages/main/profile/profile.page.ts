import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string |null = '';
  password: string |null = '';

  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

}
