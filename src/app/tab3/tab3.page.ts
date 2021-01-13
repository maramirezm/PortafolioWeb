import { Component, OnInit } from '@angular/core';
//Import del Servicio
import { UserService } from "../services/user.service";
import { UserInterface } from "../models/user-interface";
//Import del Servicio CLIENTE
import { ClienteService } from "../services/cliente.service";
import { ClienteInterface } from "../models/cliente-interface";
//ALERTA
import { AlertController } from '@ionic/angular';
//ROUTING

import { Router } from '@angular/router';
// import { resolve } from 'dns';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(public crudService: ClienteService,
    public alertController: AlertController,
    public router: Router,) {}

  rut_cliente: string = sessionStorage.getItem('rut');
  nombre_cliente: string = "";
  correo: string = "";
  direccion: string = "";
  telefono: string = "";
  restaurant_id_restaurant: number = 0;
  contrasenna: string = "";
  nombre_usuario: string = "";

    // id_usuario: number = 1;
    // nombre_usuario: string = "";
    // contrasenna: string = "";
    // edad: number = 0;
    // direccion: string = "";
    // telefono: string = "";
    // restaurant_id_restaurant: number = 0;
    Clientes: ClienteInterface[] = [];

    ngOnInit(): void {
    
      
      // this.crudService.getClienteSp().subscribe((res: ClienteInterface[]) => {
      //   this.Clientes = res;}
      // )}
      this.crudService.prueba().subscribe((res: ClienteInterface[]) => {
        this.Clientes = res;}


      )
    
     
    }

    async presentAlertConfirm() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Estás seguro que quieres cerrar sesión?',
        message: '',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Sí',
            handler: () => {
              console.log('Confirm Okay');
              this.CerrarSesion();
            }
          }
        ]
      });
  
      await alert.present();
    }
      


     getDataClientes(rut_cliente,nombre_cliente, correo,direccion,telefono,restaurant_id_restaurant,contrasenna, nombre_usuario
       ) {

        this.rut_cliente = rut_cliente;
        this.nombre_cliente = nombre_cliente;
        this.correo = correo;
        this.direccion = direccion;
        this.telefono = telefono;
        this.restaurant_id_restaurant = restaurant_id_restaurant;
        this.contrasenna = contrasenna;
        this.nombre_usuario = nombre_usuario;
  
   
  
     }


    CerrarSesion() {
      this.crudService.logout();
    }

}
