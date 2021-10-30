import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  public historias: Array<{ titulo: string, img: string }> = [];
  public h_index: number; //començament de la historia
  public h_img: string; //clase asociada a la imagen de fondo
  iniciar_historia: boolean;
  constructor() { }

  ngOnInit(): void {
    this.iniciar_historia = false;

    this.historias = [
      { titulo: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial", img: "img1" },
      { titulo: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", img: "img2" },
      { titulo: "L'heroi va decidir travessar la porta que el portava a casa", img: "img3" },
      { titulo: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...", img: "img4" }
    ];

    this.h_index = 1;
    this.h_img = this.historias[this.h_index - 1].img;
  }

  next(): void {
    if (this.h_index < this.historias.length) {
      this.h_index++;
      this.h_img = this.historias[this.h_index - 1].img;
    }
  }

  prev(): void {
    if (this.h_index > 1) {
      this.h_index--;
      this.h_img = this.historias[this.h_index - 1].img;
    } else {
      this.iniciar_historia = false;
    }
  }

  start(): void {
    this.iniciar_historia = true;
  }


}
