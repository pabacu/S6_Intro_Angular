import { Component, Input, OnInit } from '@angular/core';
import { AppHomeComponent } from '../app-home/app-home.component';


@Component({
  selector: 'app-escena',
  templateUrl: './app-escena.component.html',
  styleUrls: ['./app-escena.component.css']
})
export class AppEscenaComponent implements OnInit {

  @Input() historiaItem : {titulo: string};
  @Input() i : number; //actual ngfor index
  @Input() itemActive : number;

  constructor() { }

  ngOnInit(): void {
    
  }

  isActive():boolean{
    return (this.i + 1) == this.itemActive;
  }


}
