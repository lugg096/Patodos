import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  getMenu() {
    let user = JSON.parse(localStorage.getItem(env.STORE.USER));
    return user.role.menu || [];
  }

}
