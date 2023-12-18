import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDatosUsuario } from 'src/app/interfaces/idatos-usuario';
import { IDatosRepos } from 'src/app/interfaces/idatos-repos';

@Component({
  selector: 'app-consultas-rest',
  templateUrl: './consultas-rest.page.html',
  styleUrls: ['./consultas-rest.page.scss'],
})
export class ConsultasRestPage implements OnInit {

  constructor(private servidorRest: HttpClient) {}

  consultaGetUser() {
    // Declaramos el observable y lo inicializamos con una consulta GET
    let observableRest: Observable<IDatosUsuario> = this.servidorRest.get<IDatosUsuario>("https://api.github.com/users/sesa219244");
    // Nos subscribimos al observable y cuando recibimos datos los mostramos por consola
    observableRest.subscribe(datos => {
    console.log(datos);
    });
  }

  consultaGetRepos() {
    // Declaramos el observable y lo inicializamos con una consulta GET
    let observableRest: Observable<IDatosRepos> = this.servidorRest.get<IDatosRepos>("https://api.github.com/users/sesa219244/repos");
    // Nos subscribimos al observable y cuando recibimos datos los mostramos por consola
    observableRest.subscribe(datos => {
    console.log(datos);
    });
  }

  consultaPostUser() {
    let datos = {
      "name": "Nora",
      "location": "Spain"
    };
    // Decñaramos el observable y lo inicializamos con una consulta POST. Enviamos tambien los datos
    let observableRest: Observable<any> = this.servidorRest.post<any>("https://api.github.com/users/sesa219244", datos);
    // Nos subscribimos al observable y cuando recibimos la respuesta lo mostramos por consola
    observableRest.subscribe((datos: any) => {
      console.log(datos);
    });
  }

  ngOnInit() {
  }

}
