import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  public historias : Array<{titulo: string}> = []; 
  public h_index : number; //començament de la historia
  constructor() { }

  ngOnInit(): void {
    this.h_index = 1;
    this.historias = [
      {titulo : "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"},
      {titulo: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes."},
      {titulo: "L'heroi va decidir travessar la porta que el portava a casa"},
      {titulo: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."}
    ];
  }

  next():void{
    if(this.h_index < this.historias.length)
      this.h_index++;
    
  }

  prev():void{
    if(this.h_index > 1)
      this.h_index--;
    
  }


}
