import { Component,Input } from '@angular/core';
import { coche } from '../../models/coche';

@Component({
  selector: 'app-hijocoche',
  standalone: false,
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css',
})
export class HijococheComponent {
@Input() car!:coche;
public mensaje:string
  constructor(){
    this.car=new coche("Pontiac","Firebird",240,25,false);
    this.mensaje=""
  }

  comprobarEstado():boolean{
    if(this.car.estado==false){
      this.mensaje="El coche está apagado!!";
      this.car.velocidad=0;
      return false;
    }else{
      this.mensaje="Arrancando";
      return true;
    }
  }

  encenderCoche():void{
  this.car.estado=!this.car.estado;
  this.comprobarEstado();
  }

  acelerarCoche():void{
    if(this.comprobarEstado()==false){
      alert("El coche está apagado!")
    }else{
      if(this.car.velocidad<260){

        this.car.velocidad +=this.car.aceleracion;
      }
    }
  }


}
