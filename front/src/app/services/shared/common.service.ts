import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getStorage(key: string) {
    let item = localStorage.getItem(key);
    return JSON.parse(item) || {};
  }

}
