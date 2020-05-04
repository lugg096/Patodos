import { Component, OnInit } from '@angular/core';
import { AyudasService } from 'src/app/services/ayudas.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private _ayudas: AyudasService) {

  }
  public listAyudas = [];
  pageOfItems: Array<any>;
  titulo = 'Solicitadas';
  cantAte = 0;
  cantSoli = 0;
  cantNoAte = 0;
  public estadoAyuda = 'inp'

  ngOnInit() {
    this.getlist();

  }

  getlist() {
    this._ayudas.getListAll().subscribe((res: any) => {
      console.log(res);
      this.cantSoli = res.data.filter(x => x.status == 'inp').length;
      this.cantAte = res.data.filter(x => x.status == 'att').length;
      this.cantNoAte = res.data.filter(x => x.status == 'gra').length;
      this.listAyudas = res.data.filter(x => x.status == this.estadoAyuda);
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  find(valor) {
    this.listAyudas = [];
    switch (valor) {
      case 'inp': this.titulo = 'Solicitadas'
        break;
      case 'not': this.titulo = 'Notificadas'
        break;
      case 'nn1': this.titulo = 'Atendiendose'
        break;
      case 'att': this.titulo = 'Atendidas'
        break;
      case 'gra': this.titulo = 'Agradecidas'
        break;
      case 'rej': this.titulo = 'Rechazadas'
        break;
      default: ''
    }
    this.estadoAyuda = valor;
    this.getlist();
  }



  notificar(id) {
    swal.fire({
      title: '<small>Ingrese número telefonico</small>',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      showLoaderOnConfirm: true,
      preConfirm: (numero: string) => {

        if (numero == '') {
          swal.showValidationMessage(
            `Ingreso Invalido`
          )
        } else {
          this._ayudas.updateAyuda({ status: 'not', whatsapp: numero }, id).subscribe(res => {
            console.log(res);
            return res;
          })
        }
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {
        this.getlist();
        swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }
    })
  }

  updateAyuda(state,id){
    this._ayudas.updateAyuda({ status: state}, id).subscribe(res => {
      this.getlist();
    })
  }
}
