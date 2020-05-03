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

  }



}
