import { GestionPersonasService } from './../../services/gestion-personas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //gestionPersonas: GestionPersonasService = new GestionPersonasService();
  constructor(public gestionPersonas: GestionPersonasService) {}

}
