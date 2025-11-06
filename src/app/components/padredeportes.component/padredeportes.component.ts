import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  standalone: false,
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css',
})
export class PadredeportesComponent {
  public deportes:Array<string>;
  public mensaje:string;

  //NECESITAMOS UN MÉTODO QUE RECIBA EVENT QUE VA A SER CUALQUIER TIPADO(any)

  selectFavPadre(event:any):void{
    console.log("Comunicando al padre" + event);
    //COMO VEMOS EVENT ES EL VALOR O VALORES QUE RECOGEMOS,
    // SI SON MÁS PARAMS A PARTE DE EVENT SE NECESITARÍA OTRO VARIABLE(event:any,algo:string)
    this.mensaje="Tú deporte favorito es: "+event;
  }

  constructor(){
    this.deportes=["Basket","Waterpolo","Hockey","Fútbol","Tennis","Badminton"],
    this.mensaje="";
  }

  

}
