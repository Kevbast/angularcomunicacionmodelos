import { Component } from '@angular/core';
import { coche } from '../../models/coche';

@Component({
  selector: 'app-padrecoches',
  standalone: false,
  templateUrl: './padrecoches.component.html',
  styleUrl: './padrecoches.component.css',
})
export class PadrecochesComponent {
  public cochesArray:Array<coche>;

  constructor(){
    this.cochesArray=[
      new coche("Ford","Mustang",400,30,false),
      new coche("Volskvagen","Escarabajo",310,4,false),
      new coche("Lamborghini","Diablo",270,54,false),
    ]
  }
}
