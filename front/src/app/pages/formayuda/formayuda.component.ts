import { Component, OnInit } from '@angular/core';
import { AyudasService } from 'src/app/services/ayudas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-formayuda',
  templateUrl: './formayuda.component.html',
  styleUrls: ['./formayuda.component.css']
})
export class FormayudaComponent implements OnInit {

  constructor(private _ayudas: AyudasService, private builder: FormBuilder,private router: Router) { }

  public tipoAyudaList = [];
  public ayudaForm: FormGroup;
  public latitude = '';
  public longitude = '';

  ngOnInit() {
    this.getTipo();
    this.configForm();
  }


  private configForm() {
    this.ayudaForm = this.builder.group({
      type: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      location: [{}],
      has_contact: [false]
    });
  }

  enviar() {
    this.ayudaForm.get('location').setValue({
      latitude: this.latitude,
      longitude: this.longitude
    })
    console.log(this.ayudaForm.value);
/*     return; */

    this._ayudas.solicitarAyuda(this.ayudaForm.value).subscribe(res=>{
      if(res) swal.fire('Genial!', 'Ayuda solicitada', 'success').then(() => { this.router.navigate(['/ayudas']); });
      else swal.fire('Lo sentimos!', 'Error en l solicitud', 'error');    
    })
  }

  getTipo() {
    this._ayudas.getTipoAyudas().subscribe((res: any) => {
      this.tipoAyudaList = res.data;
    })
  }

}
