import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment as env } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public router: Router) { }

  canActivate(): Observable<boolean> {
    if (localStorage.getItem(env.STORE.TOKEN)) return of(true);
    this.router.navigate(['/login']);
    return of(false);;

  }

}
