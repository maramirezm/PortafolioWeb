import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { ClienteInterface } from '../models/cliente-interface';
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";

//PARA IMPRIMIR ERRORES DE 
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"

  })

  GetClientes() {
    const url = "http://localhost:3000/getCliente";
    return this.http.get(url);
  }

  // getClienteSp() {
  //   const url = "http://localhost:3000/getClientePst"
  //   return this.http.post(
  //     url,
  //     {
  //       "id_usuario": sessionStorage.getItem('rut'),
     
  //     },
  //     { headers: this.headers }
  //     ).pipe(map(data => data))
     
    
  // }

   //TODO: SET CURRENT USER
   setCurrentCliente(client: ClienteInterface) {
    let user_string = JSON.stringify(client);
    sessionStorage.setItem('ClienteLogueado', user_string);
  }

  //LOGiN NUEVO

  //TODO: LOGIN
  Login3(rut_cliente, contrasenna) {
    const url = "http://localhost:3000/Login4";

    return this.http.post(url,
      {
        "rut_cliente": rut_cliente,
        "contrasenna": contrasenna
      }
      , { headers: this.headers })
      .pipe(map(data => data));
  }


  //ESTE ENVIA PARAMETROS 
  prueba() {
    const url = "http://localhost:3000/pruebaGet/"+sessionStorage.getItem('rut');
    return this.http.get(url);

  }


   //TODO: SET CURRENT USER
   setCurrentUser(client: ClienteInterface) {
    let user_string = JSON.stringify(client);
    localStorage.setItem('ClienteLogueado', user_string);
  }

    //TODO: GET CURRENT USER
    getCurrentUser() {
      let userCurrent = localStorage.getItem('ClienteLogueado');
      if (userCurrent!=null) {
        let user_json = JSON.parse(userCurrent);
        return user_json;
      } else {
        return null;
      }
    }
    //TODO: INSERT USERS
  InsertCliente(nombre_cliente: string, contrasenna: string, direccion: string, telefono: string, restaurant_id_restaurant: number, rut_cliente:string,correo:string ) {
    const url = "http://localhost:3000/addCliente"
    return this.http.post(
      url,
      {
        "nombre_cliente": nombre_cliente,
        "contrasenna": contrasenna,
        "direccion": direccion,
        "telefono": telefono,
        "restaurant_id_restaurant":'1',
        "rut_cliente":rut_cliente,
        "correo": correo
      },
      { headers: this.headers }
    ).pipe(map(data => data));

  }

     //TODO: LOGOUT
  logout() {
    localStorage.removeItem("ClienteLogueado");
    sessionStorage.removeItem("rut");
    this.router.navigate(['/home']);
  }
}
