import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { CommonService } from 'src/app/services/shared/common.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  public user = {};

  constructor(public _security: SecurityService,
    private _comm: CommonService) { }

  ngOnInit() {
    this.configPage();
  }

  private configPage() {
    this.user = this._comm.getStorage(env.STORE.USER);
  }

}
