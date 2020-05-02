import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem(env.STORE.TOKEN) || null;

    let request = req;

    if (token) request = req.clone({ setHeaders: { token: token } });
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if(err.status == 0) {
          swal.fire('Lo sentimos!', env.MSG.ERR_NET, 'error');
        }

        console.log(err);
        return throwError(err);
      })
    );
  }

}
