import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitaciones',
  templateUrl: './invitaciones.component.html',
  styleUrls: ['./invitaciones.component.css']
})
export class InvitacionesComponent implements OnInit {

  constructor() { }
  public listInvitaciones = [];
  estadoInvitacion='';
  titulo = 'Invitados';
  pageOfItems: Array<any>;
  ngOnInit() {
  }


  find(valor) {
    this.listInvitaciones = [];
    switch (valor) {
      case '1': this.titulo = 'Invitados'
        break;
      case '2': this.titulo = 'Ingresaos'
        break;
      case '3': this.titulo = 'Pendientes'
        break;
      default: ''
    }
    this.estadoInvitacion = valor;
    this.getlist();
  }

  getlist(){

  }


  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

}
