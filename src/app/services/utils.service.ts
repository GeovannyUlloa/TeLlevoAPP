import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  router = inject(Router);
  toastCtrl = inject(ToastController);
  loadingCtrl = inject(LoadingController);

  routerLink(url: any) {
    this.router.navigateByUrl(url)
  }

  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent'})
  }

  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    
    toast.present();
  }

  saveLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  getLocalStorage(key: string ) {
    return JSON.parse(localStorage.getItem(key));
  }
  
}


