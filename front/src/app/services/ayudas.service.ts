import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AyudasService {

  constructor(private http: HttpClient) { }


  getList(valor) {
    let URI = env.URI.concat('prueba/prueba');
    return this.http.post<any[]>(URI,valor);
  }

  
}
