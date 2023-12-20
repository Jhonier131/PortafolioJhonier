import { Component, OnInit } from '@angular/core';
import { CONSTANTESPROYECTOS } from 'src/app/core/constantes/constantes';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  public proyects: any = CONSTANTESPROYECTOS.PROYECTOS.rickMorty;

  constructor() { }

  ngOnInit(): void {
  }

  changeProyect(proyect: string) {
    switch (proyect) {
      case 'RM':
        this.proyects = CONSTANTESPROYECTOS.PROYECTOS.rickMorty;
        break;
      case 'PT':
        this.proyects = CONSTANTESPROYECTOS.PROYECTOS.PlayTech;
        break;
    }
  }

}
