import { Component, OnInit } from '@angular/core';
//Import del Servicio
import { ReservaService } from "../services/reserva.service";
import { ReservaInterface } from "../models/reserva-interface";
 import { Reserva2Interface } from "../models/reserva2-interface";
 import { Reserva3Interface } from "../models/reserva3-interface";
//ALERTA
import { AlertController, ModalController } from '@ionic/angular';
import { ReservarPage } from "../reservar/reservar.page"
//ROUTING

import { Router } from '@angular/router';
// import { resolve } from 'dns';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(public crudService: ReservaService,
    public alertController: AlertController,
    public router: Router,
    public modalCtrl: ModalController) {}


    ngOnInit(): void {
       this.crudService.GetReservasDisponible().subscribe((res: ReservaInterface[]) => {
         this.Reserva = res;
       })
       this.crudService.GetReservasNoDisponible().subscribe((res: Reserva2Interface[]) => {
         this.Reserva2 = res;
    
      })
      this.crudService.GetReservas().subscribe((res: Reserva3Interface[]) => {
        this.Reserva3 = res;
   
     })

    
     
    }

    id_reserva_cabecera: number = 0;
    descripcion: string = "";
    fecha: Date = null;
    cliente_rut_cliente: string = "";
    estado: string = "";
   

    Reserva: ReservaInterface[] = [];
    Reserva2: Reserva2Interface[] = [];
    Reserva3: Reserva3Interface[] = [];

    
    confirmacion: boolean = true;

    reload(){

      window.location.reload();
    }

    //MODAL
    async mostrarModal() {

    
    
      const modal = await this.modalCtrl.create({
        component: ReservarPage,
        componentProps: {
         
          //  nombre_pedido: this.palabra,
          //  comentarios: this.comment,
          //  total_venta: this.ttl_venta,
          //  numero_pedido: this.nro,
         
        }
      });
      
      await modal.present();
  
      // const { data } = await modal.onDidDismiss();
      const { data } = await modal.onWillDismiss();
      console.log('onWillDismiss');
  
      console.log(data);
  
    }

    palabra: string = "";

    //Traer dato
    ponerRut(varRut: string) {

      this.palabra = varRut;
     
      this.mostrarModal();
  
    }

//ALERTA UPDATE
     async alertaConfirmar() {
       const alert = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'CANCELAR RESERVA?',
         message: 'Estás Seguro de Cancelar la reserva?',
         buttons: [
           {
             text: 'Cancelar',
             role: 'cancel',
             cssClass: 'secondary',
             handler: (blah) => {
               console.log('Confirm Cancel: blah');
                this.confirmacion = false;
                console.log(this.confirmacion);
             }
           }, {
             text: 'Sí',
             handler: () => {
               console.log('Confirm Okay');
                this.confirmacion = true;
                console.log(this.confirmacion)
                try{
                  this.updateReserva(this.id_reserva_cabecera);

                }
                catch {
                  console.log("No se pudo eliminar");
                }
                
             }
           }
         ]
       });

       await alert.present();
     }


    getDataReservas(id_reserva_cabecera, descripcion, fecha, cliente_rut_cliente, estado
      ) {
  
      this.id_reserva_cabecera = id_reserva_cabecera;
      this.descripcion = descripcion;
      this.fecha= fecha;
      // this.hora_inicio = hora_inicio;
      // this.hora_termino = hora_termino;
      this.cliente_rut_cliente = cliente_rut_cliente;
   
      this.estado = estado;

  
    }


  
    
      updateReserva(varReserva: number) {

        this.crudService.UpdateReserva(varReserva)
        .subscribe((res:Reserva3Interface[]) => {
          console.log("1");
          this.Reserva3 = res;
          console.log("2");
          this.id_reserva_cabecera=0,
     
          console.log("3"); 
          console.log(res);
          this.ngOnInit();

        //   this.router.navigateByUrl('/tabs/tab1', { skipLocationChange: true }).then(() => {
        //     this.router.navigate(['/tabs/tab1']);
        // }); 
    
         
        })
      }


      //RELOAD 
   
      
}

// console.log(localStorage.getItem('ClienteLogueado'));