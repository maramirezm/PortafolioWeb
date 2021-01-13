import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UserInterface } from '../models/user-interface';
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"

  })

 //TODO: GET Reserva
 GetReservas() {
  const url = "http://localhost:3000/getReservas";
  return this.http.get(url);
}

//Get DISPONIBLE
GetReservasDisponible() {
  const url = "http://localhost:3000/getReservasDisponible2/"+ sessionStorage.getItem('rut');
  return this.http.get(url);
}

//GET NO DISPONIBLE
GetReservasNoDisponible() {
  const url = "http://localhost:3000/getReservasNoDisponible2/" + sessionStorage.getItem('rut');
  return this.http.get(url);
}
//GET NO DISPONIBLE
BuscarReservas(hora_inicio: number,hora_termino: number //, fecha: string
  ) {
  const url = "http://localhost:3000/getReservasSegunHorasSP/" + hora_inicio + '&' + hora_termino + '&' //+ fecha
  ;
  return this.http.get(url);
}

   //TODO: INSERT RESERVA
   InsertReserva(id_reserva_cabecera: number, descripcion: string, fecha: Date, cliente_rut_cliente: string,
    estado: string, id_reserva_detalle: number, hora_inicio: number, hora_termino: number, reserva_cab_id: number,
    mesa_id_mesa: number, ) {
    const url = "http://localhost:3000/addReservas"
    return this.http.post(
      url,
      {
        "id_reserva_cabecera": id_reserva_cabecera,
        "descripcion": descripcion,
        "fecha": fecha, 
        "cliente_rut_cliente": cliente_rut_cliente,
        "estado": estado, 
        "id_reserva_detalle": id_reserva_detalle, 
        "hora_inicio": hora_inicio,
        "hora_termino": hora_termino,
        "reserva_cab_id": reserva_cab_id,
        "mesa_id_mesa": mesa_id_mesa, 
      },
      { headers: this.headers }
    ).pipe(map(data => data));

  }
  
//TODO: INSERT RESERVA
InsertReservaSP(descripcion: string, fecha: Date, cliente_rut_cliente: string,
  estado: string, hora_inicio: number, hora_termino: number,  mesa_id_mesa: number, ) {
  const url = "http://localhost:3000/addReservasSP"
  return this.http.post(
    url,
    {
      "descripcion": descripcion,
      "fecha": fecha, 
      "cliente_rut_cliente": cliente_rut_cliente,
      "estado": estado, 
      "hora_inicio": hora_inicio,
      "hora_termino": hora_termino,
      "mesa_id_mesa": mesa_id_mesa, 
    },
    { headers: this.headers }
  ).pipe(map(data => data));

}


//UPDATE RESERVA
UpdateReserva(id_reserva_cabecera: number) {
  const url = "http://localhost:3000/updateReservaCabecera";

  return this.http.put(
    url,
    {
      "id_reserva_cabecera": id_reserva_cabecera,
    },
    { headers: this.headers }
  ).pipe(map(data => data));
}



}