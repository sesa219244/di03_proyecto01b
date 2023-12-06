import { AlertController, ModalController } from '@ionic/angular';
import { GestionPersonasService, IPersona } from './../../services/gestion-personas.service';
import { Component } from '@angular/core';
import { InsertarPage } from '../insertar/insertar.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //gestionPersonas: GestionPersonasService = new GestionPersonasService();
  constructor(public gestionPersonas: GestionPersonasService, 
    private alerta: AlertController, 
    private modal: ModalController) {}

  borrar(id: string) {
    this.gestionPersonas.borrarPersona(id);
  }

  modificar(persona: IPersona) {
    this.presentarAlerta(persona);
  }

  async presentarAlerta(persona: IPersona) {
    const alert = await this.alerta.create({
      backdropDismiss: false, // No permite hacer nada mas hasta contestar la alerta 
      header: 'Modificar',
      message: 'Actualiza los valores',
      inputs: [
        {
          name: 'ID',
          type: 'text',
          placeholder: 'Introduce id',
          value: persona.id
        },
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Introduce nombre',
          value: persona.nombre
        },
        {
          name: 'Apellido',
          type: 'text',
          placeholder: 'Introduce apellido',
          value: persona.apellido
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
              console.log('Confirm Cancel');
          }
        },
        {
          text: 'Okay',
          handler: (data) => {
            console.log(data);
            console.log(data.ID);
            this.gestionPersonas.modificarPersona(data.ID, data.Nombre, data.Apellido);
          }
        }
      ]
    });
    await alert.present();
  }

  async presentarModal() {
    const modal = await this.modal.create({
      backdropDismiss: false,
      component: InsertarPage,
    });
    return await modal.present();
  }

}
