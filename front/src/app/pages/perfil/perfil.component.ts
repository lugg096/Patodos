import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/shared/common.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user = {};
  constructor( private _comm: CommonService) { }
 

  ngOnInit() {
    this.configPage();
  }

  private configPage() {
    this.user = this._comm.getStorage(env.STORE.USER);
  }

}
