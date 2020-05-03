import { Component, OnInit } from '@angular/core';
import { AyudasService } from 'src/app/services/ayudas.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private _ayudas: AyudasService) {
  }
  public listAyudas =[];

  ngOnInit() {
    this.getAyudas(); 
  }

  getAyudas() {
    let valor1 = {
      nombre: 'hola',
      edad: 15
    }

    this._ayudas.getList(valor1).subscribe(res=>{
      console.log(res);
      this.listAyudas=res;
    })
  }

}
