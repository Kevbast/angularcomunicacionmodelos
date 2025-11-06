import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  standalone: false,
  templateUrl: './hijodeporte.component.html',
  styleUrl: './hijodeporte.component.css',
})
export class HijodeporteComponent {
@Input() sport!:string;
//igual que el nombre de la funcion q pasamos por props
@Output() seleccionarFavPadre:EventEmitter<any>=new EventEmitter();

//NECESITAMOS UN MÉTODO PARA QUE CADA HIJO REALICE CLICK Y A SU VEZ LLAMAMOS AL PARENT

selectFavoritoHijo():void{
  //DENTRO DE EMIT ENVIAREMOS LOS PARAMETROS QUE NECESITEMOS
  this.seleccionarFavPadre.emit(this.sport);
}

}
