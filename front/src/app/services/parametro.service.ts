import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  constructor(private http: HttpClient) { }

  getAll() {
    let URI = env.URI.concat('parametro/all');
    return this.http.get<any[]>(URI);
  }

  getById(id: string) {
    let URI = env.URI.concat('parametro/get/', id);
    return this.http.get<any>(URI).pipe(
      map(res => {
        if(res.padre) {
          res.padre_tem = res.padre.alias;
          res.padre = res.padre._id;
        }

        return res;
      })
    );
  }

  getByGroup(filtro: any) {
    let URI = env.URI.concat('parametro/grupo');
    return this.http.put<any>(URI, filtro);
  }

  getByPadre(padre: string) {
    let URI = env.URI.concat('parametro/padre/', padre);
    return this.http.get<any>(URI);
  }

  getParametroGrupos() {
    let URI = env.URI.concat('parametro/list_grupos');
    return this.http.get<any[]>(URI);
  }

  getList() {
    let URI = env.URI.concat('parametro/list');
    return this.http.get<any[]>(URI);
  }

  save(data: any) {
    let URI = env.URI.concat('parametro/', data._id ? 'update' : 'insert');
    return this.http.post<any>(URI, data);
  }

  delete(id: string) {
    let URI = env.URI.concat('parametro/delete/', id);
    return this.http.get<any>(URI);
  }

}
