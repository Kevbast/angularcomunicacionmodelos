import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  standalone: false,
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css',
})
export class ComicComponent {
@Input() comic!:Comic;
@Input() index!:number;//para eliminar
@Output() seleccionarFav:EventEmitter<any>=new EventEmitter<any>();//hay que instanciarlo
@Output() deleteComic:EventEmitter<any>=new EventEmitter<any>();

  seleccionarFavHijo():void{
    this.seleccionarFav.emit(this.comic);
  }

  eliminarComic():void{
    this.deleteComic.emit(this.index);
  }

}
