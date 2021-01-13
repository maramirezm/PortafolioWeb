import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { UserInterface } from '../models/user-interface';
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
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"

  })
  


  //TODO: GET USERS
  GetUsers() {
    const url = "http://localhost:3000/getUsers";
    return this.http.get(url);
  }

  GetUserSpecific() {
    const url = "http://localhost:3000/getUsersSp";
    return this.http.get(url);

  }

  //TODO: INSERT USERS
  InsertUser(nombre_usuario: string, contrasenna: string, edad: number, direccion: string, telefono: string, restaurant_id_restaurant: number, rut_usuario:number, digito:string, nombre:string,correo:string ) {
    const url = "http://localhost:3000/addUser"
    return this.http.post(
      url,
      {
        "nombre_usuario": nombre_usuario,
        "contrasenna": contrasenna,
        "edad": edad,
        "direccion": direccion,
        "telefono": telefono,
        "restaurant_id_restaurant":restaurant_id_restaurant,
        "rut_usuario":rut_usuario,
        "digito": digito,
        "nombre": nombre,
        "correo": correo
      },
      { headers: this.headers }
    ).pipe(map(data => data));

  }

  LoginUser(id_usuario: number, contrasenna: string) {
    const url = "http://localhost:3000/login"
    return this.http.post(
      url,
      {
        "id_usuario":id_usuario,
        "contrasenna": contrasenna,
      },
      { headers: this.headers }
      ).pipe(map(data => data))
     
    
  }


  //LOGiN NUEVO

  //TODO: LOGIN
  Login2(id_usuario, contrasenna) {
    const url = "http://localhost:3000/Login2";

    return this.http.post(url,
      {
        "id_usuario": id_usuario,
        "contrasenna": contrasenna
      }
      , { headers: this.headers })
      .pipe(map(data => data));
  }


   //TODO: SET CURRENT USER
   setCurrentUser(user: UserInterface) {
    let user_string = JSON.stringify(user);
    localStorage.setItem('UsuarioLogueado', user_string);
  }

    //TODO: GET CURRENT USER
    getCurrentUser() {
      let userCurrent = localStorage.getItem('UsuarioLogueado');
      if (userCurrent!=null) {
        let user_json = JSON.parse(userCurrent);
        return user_json;
      } else {
        return null;
      }
    }

     //TODO: LOGOUT
  logout() {
    localStorage.removeItem("UsuarioLogueado");
    this.router.navigate(['/home']);
  }

}
