import { Component, OnInit } from '@angular/core';
import { GestionPersonasService } from 'src/app/services/gestion-personas.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {

  id: string ="";
  nombre: string ="";
  apellido: string ="";

  constructor(private insertarPersonas: GestionPersonasService) { }

  ngOnInit() {
  }

  onClick() {

    // Insertar
    this.insertarPersonas.insertarPersona(this.id, this.nombre, this.apellido);
  }

}
