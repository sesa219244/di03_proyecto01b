import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersona } from '../interfaces/mis-interfaces';

/*export interface IPersona {
  id: string;
  nombre: string;
  apellido: string;
}*/

@Injectable({
  providedIn: 'root'
})

export class GestionPersonasService {

  private personas: IPersona[] = [];

  constructor(private leerFichero: HttpClient) {
    this.getPersonasFichero();
  }

  getPersonasFichero() {
    let datosFichero: Observable<IPersona[]>;
    datosFichero = this.leerFichero.get<IPersona[]>("/assets/datos/personas.json");
    datosFichero.subscribe(datos => {
      console.log(datos);
      this.personas.push(...datos)
    });
  }
 
  getPersonas() {
    return this.personas;
  }

  // Insertar una nueva persona
  insertarPersona(id: string, nombre: string, apellido: string) {

    // Creamos la nueva IPersona
    let nuevaPersona: IPersona = {id: id, nombre: nombre, apellido: apellido};

    // La insertamos
      this.personas.push(nuevaPersona);
      console.log(this.personas)
  }

  borrarPersona(id: string) {

    // Busca la persona con el id dado
    let personaEncontrada: IPersona | undefined = this.personas.find(function(cadaPersona) { return cadaPersona.id == id });
    console.log(personaEncontrada)

    // Busca el índice de la persona
    let indice: number = -1;
    if (personaEncontrada == undefined) {}
    else {
      indice = this.personas.indexOf(personaEncontrada)
    };
    console.log(indice);

    // Borra la persona con el índice obtenido
    if (indice == -1) {}
    else {
      this.personas.splice(indice, 1)
    };
    console.log(this.personas);
  }

  modificarPersona(id: string, nombre: string, apellido: string) {
    let personaEncontrada: IPersona | undefined = this.personas.find(function(cadaPersona) { return cadaPersona.id == id });
    let indice: number = -1;
    if (personaEncontrada == undefined) {}
    else {
      indice = this.personas.indexOf(personaEncontrada)
    };
      this.personas[indice].nombre = nombre;
      this.personas[indice].apellido = apellido;
  }
}
