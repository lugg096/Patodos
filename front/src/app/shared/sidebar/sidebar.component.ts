import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/shared/sidebar.service';
import { environment as env } from 'src/environments/environment';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public menu = [];
  public user = {};

  constructor(public _sidebar: SidebarService,
    private _comm: CommonService) { }

  ngOnInit() {
    this.configPage();
  }

  private configPage() {
  //  this.menu = this._sidebar.getMenu();
  //  this.user = this._comm.getStorage(env.STORE.USER);
  }

}
