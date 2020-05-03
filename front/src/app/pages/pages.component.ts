import { Component, OnInit, OnDestroy } from '@angular/core';
import { SecurityService } from '../services/security.service';
import { environment as env } from 'src/environments/environment';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import swal from 'sweetalert2';

/* declare function init_pluggins(); */

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit, OnDestroy {

  private seconds: number;
  private $interval = interval(1000);


  private unsubscribe = Subscription.EMPTY;;

  constructor(private _security: SecurityService,
    private router: Router) { }

  ngOnInit() {

    this._security.session()
      .subscribe(res => {
        if (!res.expired) {
          let cur = Date.now() / 1000;
          this.seconds = Math.round(res.exp - cur);

          this.initTimeDown();
        }
      });
  }

  private initTimeDown() {
    this.unsubscribe = this.$interval.pipe(
      take(this.seconds)
    ).subscribe(_ => {
      --this.seconds;
      if (this.seconds <= 20) {
        localStorage.removeItem(env.STORE.TOKEN);
        localStorage.removeItem(env.STORE.USER);

        this.router.navigate(['/login'], {
          queryParams: {
            expired: true
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

}
