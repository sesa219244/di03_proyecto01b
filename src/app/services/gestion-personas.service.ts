import { Injectable } from '@angular/core';

export interface IPersona {
  id: string;
  nombre: string;
  apellido: string;
}

@Injectable({
  providedIn: 'root'
})

export class GestionPersonasService {

  private personas: IPersona[] = [
    {id: "aa", nombre: "Aitor", apellido: "Arana"},
    {id: "sr", nombre: "Sara", apellido: "Ruiz"},
    {id: "mo", nombre: "Miren", apellido: "Ojer"}
  ]

  constructor() { }

  getPersonas() {
    return this.personas;
  }

  // Insertar una nueva persona
  insertarPersona(id: string, nombre: string, apellido: string) {

    // Creamos la nueva IPersona
    let nuevaPersona: IPersona = {id: id, nombre: nombre, apellido: apellido};

    // La insertamos
    this.personas.push(nuevaPersona);
    console.log(this.personas);
  }

  borrarPersona(id: string) {

    // Busca la persona con el id dado
    //let personaEncontrada: IPersona = this.personas.find(function(cadaPersona) { return cadaPersona.id == id });
    //console.log(personaEncontrada);

    // Busca el índice de la persona
    //let indice: number = this.personas.indexOf(personaEncontrada);
    //console.log(indice);

    // Borra la persona con el índice obtenido
    //this.personas.splice(indice, 1);
    //console.log(this.personas);

  }

}
