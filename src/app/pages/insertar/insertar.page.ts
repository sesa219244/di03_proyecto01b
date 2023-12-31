import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  constructor(private insertarPersonas: GestionPersonasService,
    public modal_: ModalController) {}

  ngOnInit() {
  }

  onClick() {

    // Insertar
    this.insertarPersonas.insertarPersona(this.id, this.nombre, this.apellido);

    // dismiss
    this.modal_.dismiss();
  }

}
