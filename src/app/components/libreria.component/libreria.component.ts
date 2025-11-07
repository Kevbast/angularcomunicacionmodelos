import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics';
@Component({
  selector: 'app-libreria',
  standalone: false,
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
  //DEBEMOS DECLARAR EL SERVICIO PARA PODER RECUPERARLO DENTRO DE UN CONSTRUCTOR
  // providers:[ServiceComics] SE QUITARÍA DE AQUÍ SI LO PONEMOS EN APP-MODULE
})
//implementamos oninit para los servicios
export class LibreriaComponent implements OnInit{
  public comics!:Array<Comic>;//se pone admiración,puesto que no se declara en el constructor
  public comicFavorito!:Comic;

  @ViewChild("cajatitulo") cajaTitulo!:ElementRef;
  @ViewChild("cajaimagen") cajaimagen!:ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion!:ElementRef;

  seleccionarFav(fav:Comic):void{
    console.log(fav);
    //para ver el comicfavorito cuando lo pasemos en el hijo
    this.comicFavorito=fav;
  }

  deleteComic(index:number){
    this.comics.splice(index,1);

  }

  nuevoComic():void{
    let titulo=this.cajaTitulo.nativeElement.value;
    let imagen=this.cajaimagen.nativeElement.value;
    let descripcion=this.cajadescripcion.nativeElement.value;
    let comicNew= new Comic(titulo,imagen,descripcion)
    this.comics.push(comicNew);
  }
  //injectable services
  constructor(private _service:ServiceComics){
  }
  //ahora declaramos el array de comics en OnInit
  ngOnInit(): void {
    this.comics=this._service.getComics();
  }


}
