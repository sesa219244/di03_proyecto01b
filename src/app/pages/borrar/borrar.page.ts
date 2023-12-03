import { Component, OnInit } from '@angular/core';
import { GestionPersonasService } from 'src/app/services/gestion-personas.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.page.html',
  styleUrls: ['./borrar.page.scss'],
})
export class BorrarPage implements OnInit {

  indice: string ="";
  
  constructor(private borrarPersonas: GestionPersonasService) { }
  
  ngOnInit() {
  }

  onClick() {
    // Borrar
    this.borrarPersonas.borrarPersona(this.indice);
    
  }

}
