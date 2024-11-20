import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './services/firebase.service'; // o el nombre correcto de tu servicio

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.firebaseService.isAuthenticated) { // Asegúrate de tener un método para verificar la autenticación
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
