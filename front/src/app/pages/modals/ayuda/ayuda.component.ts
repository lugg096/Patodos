import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import swal from 'sweetalert2';
import { environment as env } from 'src/environments/environment';
import { AyudasService } from 'src/app/services/ayudas.service';
import { CommonService } from 'src/app/services/shared/common.service';


@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {

  constructor(private _ayudas: AyudasService, public bsModalRef: BsModalRef,
  private _comm: CommonService) { }
  public tipoAyudaList = [];
  public ayudaCreador;
  public isSaving = false;
  public isEdit = false;
  private data: any;

  public creadorAyuda='';
  public ayuda:any = {
    type: null,
    title: null,
    description: null,
    location:{
      latitude: null,
      longitude: null,
    },
    status:'',
    has_contact: false
  };
  public ayudaUpdate:any;


  ngOnInit() {
    this.getTipo();
    this.configData();
    console.log(this.data);
  }

  private configData() {
    if(this.data!=null) {
      this.isEdit=true;
      this.creadorAyuda=this.data.fullName,
      this.ayuda.id=this.data.id,
      this.ayuda.type=this.data.typeId,
      this.ayuda.title=this.data.title,
      this.ayuda.description=this.data.description,
      this.ayuda.status=this.data.status
      
     /*  this.ayuda.location.latitude=this.data.location.latitude
      this.ayuda.location.longitude=this.data.location.longitude */
    }else{
      this.creadorAyuda=this._comm.getStorage(env.STORE.USER).fullName;
      console.log('valorTitulo',this.creadorAyuda);
      
    }
  }

  getTipo() {
    this._ayudas.getTipoAyudas().subscribe((res: any) => {
      this.tipoAyudaList = res.data;
     
    })
  }

  enviar() {
    this.isSaving=true;    
    this._ayudas.solicitarAyuda(this.ayuda).subscribe(res => {
      if (res){
        swal.fire('Genial!', 'Ayuda solicitada', 'success');
        this.bsModalRef.hide();
        this.isSaving = false;
      } 
      else swal.fire('Lo sentimos!', 'Error en la solicitud', 'error');
    })
  }


  updateAyuda() {
    this.isSaving=true; 
    let update={
      typeId:this.ayuda.type,
      title:this.ayuda.title,
      description:this.ayuda.description
    }
    this._ayudas.updateAyuda(update, this.ayuda.id).subscribe(res => {
      this.bsModalRef.hide();
        this.isSaving = false;
    })
  }

}
