import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment as env } from 'src/environments/environment';
import { CommonService } from './shared/common.service';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private _http: HttpClient,
    private _util: CommonService,
    private router: Router) { }

  sign(user: any) {

    let URL = env.URI.concat('auth/token/');
    return this._http.post(URL, user).pipe(
      map((res: any) => {
        console.log('devuelve',res);
        localStorage.setItem(env.STORE.TOKEN, res.tokenAccess);
        localStorage.setItem(env.STORE.USER, JSON.stringify(res));
        return true;
      })
    );
  }

  logout() {
    swal.fire({
      title: env.MSG.CONFIRM,
      text: env.MSG.CLOSE_SESSION,
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    }).then(res => {
      if (res.value) {
        localStorage.removeItem(env.STORE.TOKEN);
        localStorage.removeItem(env.STORE.USER);
        this.router.navigate(['/login']);
      }
    });
  }

  session() {
    let URL = env.URI.concat('security/session');
    return this._http.get(URL).pipe(
      map((res: any) => {
        if (res.expired) {
          localStorage.removeItem(env.STORE.TOKEN);
          localStorage.removeItem(env.STORE.USER);
          this.router.navigate(['/login'], { queryParams: { expired: true } });
          return;
        }

        return res;
      })
    );
  }

  extendSession() {
    let URL = env.URI.concat('security/extendSession');
    return this._http.get(URL, { headers: { user: localStorage.getItem(env.STORE.USER) } }).pipe(
      map((res: any) => {
        localStorage.setItem(env.STORE.TOKEN, res.token);
        return res;
      })
    );
  }

  userId() {
    return this._util.getStorage(env.STORE.USER)._id || '';
  }

}
