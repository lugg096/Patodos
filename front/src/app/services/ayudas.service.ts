import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AyudasService {

  constructor(private http: HttpClient) { }


  getList(valor) {
    let URI = env.URI.concat('prueba/prueba');
    return this.http.post<any[]>(URI, valor);
  }

  getListAll() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem(env.STORE.TOKEN)
    })
    let URI = env.URI.concat('requests/');
    return this.http.get<any[]>(URI, { headers });
  }

  updateAyuda(valor, id) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem(env.STORE.TOKEN)
    })
    let URI = env.URI.concat('requests/' + id + '/edit/');
    return this.http.post<any[]>(URI, valor, { headers });
  }


}
