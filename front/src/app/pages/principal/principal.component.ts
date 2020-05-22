import { Component, OnInit } from '@angular/core';
import { AyudasService } from 'src/app/services/ayudas.service';
import swal from 'sweetalert2';
import { environment as env } from 'src/environments/environment';
import { ModalService } from 'src/app/services/shared/modal.service';
import { AyudaComponent } from '../modals/ayuda/ayuda.component';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private _ayudas: AyudasService, private _dlg: ModalService, private _comm: CommonService) {

  }
  public listAyudas = [];
  public listUltimasAyudas = [];
  public ayudaSelect;
  pageOfItems: Array<any>;
  titulo = 'Solicitadas';
  cantAte = 0;
  cantSoli = 0;
  cantNoAte = 0;
  cantAtendiendose = 0;
  cantAgradecidas = 0;
  cantRechazadas = 0;
  public estadoAyuda = 'inp'
  refresh = false;
  loadRegistros = false;
  coins;

  ngOnInit() {
    this.getlist();
    this.coins = this._comm.getStorage(env.STORE.USER).orgs[0].japiCoinsAvailable;
    this.updateUltimasAyudas();
  }
  refreshList() {
    this.listAyudas = [];
    this.refresh = true;
    this.getlist();
  }

  getlist() {
    this.loadRegistros = true;
    this._ayudas.getListAll().subscribe((res: any) => {
      this.cantSoli = res.data.filter(x => x.status == 'inp').length;
      this.cantAte = res.data.filter(x => x.status == 'att').length;
      this.cantNoAte = res.data.filter(x => x.status == 'not').length;

      this.cantAtendiendose = res.data.filter(x => x.status == 'acc').length;
      this.cantAgradecidas = res.data.filter(x => x.status == 'gra').length;
      this.cantRechazadas = res.data.filter(x => x.status == 'rej').length;

      this.listAyudas = res.data.filter(x => x.status == this.estadoAyuda);

      this.listAyudas.sort((a, b) => parseFloat(a.created) - parseFloat(b.created));
      this.listAyudas = this.listAyudas.reverse();
      this.loadRegistros = false;
      this.refresh = false;
      console.log(this.listAyudas);

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
      case 'acc': this.titulo = 'Atendiendose'
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

  modalAyuda(ayud?) {
    let ayudaSelect = null;
    if (ayud != undefined) ayudaSelect = ayud;
    console.log('valor', ayudaSelect);
    this._dlg
      .showModal(AyudaComponent, { data: ayudaSelect }, 'modal-lg')
      .subscribe((res: any) => {

        if (!res.isCancel) {
          this.getlist();
        }
      });
  }



  notificar(id) {

    swal.fire({
      title: '<small>Notificar Ayuda</small>',
      html:
        'Ingrese número telefonico para <b>contactarlo</b>. ',
      /* + '<div class="row"><div class="col-2 swal2-title mt-4">+51</div><div class="col-10"><input placeholder="966350303" type="text" style="display: flex;" class="swal2-input"></div>', */
      inputValue: '+51',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },

      inputPlaceholder: '+51966350303',
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
            return res;
          })
        }
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {
        this.getlist();
        swal.fire('Genial!', 'Ayuda notificada', 'success');
      }
      this.getlist();
    })

  }

  updateAyuda(state, valor) {
    valor.cargando = true;
    this._ayudas.updateAyuda({ status: state }, valor.id).subscribe(res => {
      this.getlist();
    })
  }

  interval;
  updateUltimasAyudas() {
    this.getUltimasAyudas();
    this.interval = setInterval(() => {
      this.getUltimasAyudas();
    }, 60000)//cada un minuto
  }

  getUltimasAyudas() {
    this._ayudas.getUltimasAyudas().subscribe((res: any) => {
      this.listUltimasAyudas = [];
      let l = res.data.length <= 5 ? res.data.length : 5;
      for (let i = 0; i < l; i++) {
        this.listUltimasAyudas.push(res.data[i]);
      }
    })
  }


}
