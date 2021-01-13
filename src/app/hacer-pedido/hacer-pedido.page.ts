import { Component, Input, OnInit } from '@angular/core';
//Import del Servicio
 import { PedidoService } from "../services/pedido.service";
 import { PedidoInterface } from "../models/pedido-interface";
//ALERTA
import { AlertController, IonItemOptions, ModalController } from '@ionic/angular';
//ROUTING

import { Router } from '@angular/router';
// import { resolve } from 'dns';

@Component({
  selector: 'app-hacer-pedido',
  templateUrl: './hacer-pedido.page.html',
  styleUrls: ['./hacer-pedido.page.scss'],
})
export class HacerPedidoPage implements OnInit {

  @Input() precio_pedido: number = 0
  @Input() cantidad_pedido: number = 0

  comida1 = {
    name: "Spaguetti",
    price: 2000
  };
  comida2 = {
    name: "Surtido Marino",
    price: 10000
  };
  comida3 = {
    name: "Pastel",
    price: 5000
  };
  comida4 = {
    name: "Sandwitch",
    price: 6000
  };
  comida5 = {
    name: "Chorrillana",
    price: 12990
  };

  price: number = 0;

  precio() {
    if(this.precio_pedido == 1){this.price = this.comida1.price * this.cantidad};
    if(this.precio_pedido == 2){this.price = this.comida2.price * this.cantidad};
    if(this.precio_pedido == 3){this.price = this.comida3.price * this.cantidad};
    if(this.precio_pedido == 4){this.price = this.comida4.price * this.cantidad};
    if(this.precio_pedido == 5){this.price = this.comida5.price * this.cantidad};
  }
  constructor(public crudService: PedidoService,
    public alertController: AlertController,
    public router: Router,
    private modalCtrl: ModalController) {
    }

  ngOnInit(): void {
    this.crudService.GetPedidos().subscribe((res: PedidoInterface[]) => {
      this.Pedidos = res;
    })
  }

  cerrar(){
    this.modalCtrl.dismiss();
  }
  
  confirmacion: boolean = true;
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Estás Seguro?',
      message: '',
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
             this.confirmar();
          }
        }
      ]
    });
    await alert.present();
  }
  
  async alertaConfirmar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'PEDIDO GUARDADO',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });
    await alert.present();
    // this.router.navigate(['/tabs/tab1']);
    this.modalCtrl.dismiss();
    window.location.reload();
  }
  
  confirmar() {
    if(this.confirmacion = true)
    {
      this.addPedido();
      this.alertaConfirmar();
  
    }
    else{
      console.log('NO GUARDADO');
    }
  }

  //id_pedido_cabecera: number = 0;
  nombre_pedido: string = "";
  cantidad: number = 0;
  total_venta: number = this.precio_pedido;
  comentarios: string = "";
  reserva_det_id: number = 0;
  estado: string = "4";
  //Pedido Detalle
  //id_pedido_detalle: number = 0;
  cantidad_producto: number = 0;
  productocab_idprod: number = 0;
  Pedidos: PedidoInterface[] = [];

  addPedido() {
    this.crudService.InsertPedidos(this.nombre_pedido, this.cantidad, this.total_venta, this.comentarios, this.reserva_det_id, this.estado, 
      this.cantidad_producto, this.productocab_idprod )
      .subscribe((res:PedidoInterface[]) => {
        this.Pedidos = res;     
        this.nombre_pedido = "";
        this.cantidad = 0;
        this.total_venta = this.precio_pedido;
        this.comentarios = "";
        this.reserva_det_id = 0;
        this.estado = "4";
        //Pedido Detalle
        this.cantidad_producto = this.cantidad;
        this.productocab_idprod = this.precio_pedido;
      })
    }
}
