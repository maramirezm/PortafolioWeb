import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { UserInterface } from '../models/user-interface';
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";
import { PedidoInterface } from '../models/pedido-interface';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient, private router: Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"

  })

   //TODO: GET USERS
   GetPedidos() {
    const url = "http://localhost:3000/getPedidos";
    return this.http.get(url);
  }

    //GET PEDIDOS DISPONIBLE
    GetPedidosDisponible() {
      const url = "http://localhost:3000/getPedidosDisponible2/" + sessionStorage.getItem('rut');
      return this.http.get(url);
    }
  
    //GET PEDIDOS NO DISPONIBLE
    GetPedidosNoDisponible() {
      const url = "http://localhost:3000/getPedidosCancelados2/" + sessionStorage.getItem('rut');
      return this.http.get(url);
    }

    GetPedidosCompletados() {
      const url = "http://localhost:3000/getPedidosCompletados2/" + sessionStorage.getItem('rut');
      return this.http.get(url);
    }

  //TODO: INSERT USERS
  InsertPedidos( nombre_pedido: string, cantidad: number, total_venta: number, comentarios: string, reserva_det_id: number, estado: string,
    cantidad_producto: number,
    productocab_idprod: number) {
    const url = "http://localhost:3000/addPedidosSP"
    return this.http.post(
      url,
      {
        "nombre_pedido": nombre_pedido,
        "cantidad": cantidad,
        "total_venta": total_venta,
        "comentarios": comentarios,
        "reserva_det_id": reserva_det_id,
        "estado": "4",
        //Pedido Detalle
        "cantidad_producto": cantidad_producto,
        "productocab_idprod": productocab_idprod
      },
      { headers: this.headers }
    ).pipe(map(data => data));

  }

  
   //TODO: SET CURRENT PEDIDOP
   setCurrentPedido(pedido: PedidoInterface) {
    let user_string = JSON.stringify(pedido);
    localStorage.setItem('PedidoSeleccionado', user_string);
  }

  //UPDATE RESERVA
UpdatePedido(id_pedido_cabecera: number) {
  const url = "http://localhost:3000/updatePedido2";

  return this.http.put(
    url,
    {
      "id_pedido_cabecera": id_pedido_cabecera,
    },
    { headers: this.headers }
  ).pipe(map(data => data));
}

  


  //UPDATE RESERVA
  UpdatePedido2(id_pedido_cabecera: number) {
    const url = "http://localhost:3000/updatePedido3";
  
    return this.http.put(
      url,
      {
        "id_pedido_cabecera": id_pedido_cabecera,
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  }
  
    
  

}