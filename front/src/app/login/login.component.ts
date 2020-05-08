import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { environment as env } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { ParametroService } from '../services/parametro.service';

/* declare function init_pluggins(); */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public msg = '';
  public loading = false;

  public loginForm: FormGroup;

  constructor(private builder: FormBuilder,
    public title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private _security: SecurityService,
    private _parametro: ParametroService) { }

  ngOnInit() {

    this.configForm();
    /*     this.getParametros(); */
    if (this.route.snapshot.queryParamMap.get('expired') == 'true') {
      this.msg = env.MSG.EXPIRED_SESSION;
    }
  }

  public ingresar() {
    if (this.loginForm.invalid || this.loading) return;

    this.msg = '';
    this.loading = true;
    console.log(this.loginForm.value);


    this._security.sign(this.loginForm.value)
      .subscribe(_ => {
        this.loading = false;
        this.router.navigate(['/ayudas']);
      }, err => {
        this.loading = false;
        this.msg = err.error.msg || '';
      }, () => this.loading = false);
  }

  public isInvalid(key: string) {
    if (this.loginForm.get(key).invalid && this.loginForm.get(key).touched) return true;
    return false;
  }

  private configForm() {
    this.title.setTitle('Login');

    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /*   private getParametros() {
      this._parametro.getAll()
        .subscribe(res => {
          if (res) this.saveLocalStorage(res);
        });
    } */

  private saveLocalStorage(parametros) {
    let grupos = [];
    for (let p of parametros) {
      grupos.push(p._id);
      localStorage.setItem(p._id, JSON.stringify(p.parametros));
    }
    localStorage.setItem('GRUPOS', JSON.stringify(grupos));
  }

}
