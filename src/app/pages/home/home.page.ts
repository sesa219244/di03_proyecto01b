import { AlertController } from '@ionic/angular';
import { GestionPersonasService, IPersona } from './../../services/gestion-personas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alertController: any;

  //gestionPersonas: GestionPersonasService = new GestionPersonasService();
  constructor(public gestionPersonas: GestionPersonasService, private alerta: AlertController) {}

  borrar(id: string) {
    this.gestionPersonas.borrarPersona(id);
  }

  modificar(persona: IPersona) {
    this.presentarAlerta(persona);
  }

  async presentarAlerta(persona: IPersona) {
    const alert = await this.alerta.create({
      //cssClass: 'my-custom-class',
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
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
