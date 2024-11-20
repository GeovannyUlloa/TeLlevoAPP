import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirebaseService } from './services/firebase.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

class MockFirebaseService {
    isAuthenticated = false; 
}

describe('AuthGuard', () => {
    let guard: AuthGuard;
    let firebaseService: MockFirebaseService;
    let router: Router;

    const executeGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        TestBed.runInInjectionContext(() => {
            return guard.canActivate(next, state);
        });

    beforeEach(() => {
        firebaseService = new MockFirebaseService();
        router = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            providers: [
                AuthGuard,
                { provide: FirebaseService, useValue: firebaseService },
                { provide: Router, useValue: router }
            ]
        });

        guard = TestBed.inject(AuthGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });

    it('should allow access if authenticated', () => {
        firebaseService.isAuthenticated = true;
        const next = new ActivatedRouteSnapshot();
        const state = {} as RouterStateSnapshot;
        const result = executeGuard(next, state);
        expect(result).toBeTrue();
    });

    it('should deny access and navigate to /auth if not authenticated', () => {
        firebaseService.isAuthenticated = false;
        const next = new ActivatedRouteSnapshot();
        const state = {} as RouterStateSnapshot;
        const result = executeGuard(next, state);
        expect(result).toBeFalse();
        expect(router.navigate).toHaveBeenCalledWith(['/auth']);
    });
});