import { Component } from '@angular/core';

export interface IPersona {
  id: string;
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //gestionPersonas: GestionPersonasService = new GestionPersonasService();
  //constructor(private gestionPersonas: GestionPersonasService) {}

}
