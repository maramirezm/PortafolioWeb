import { Component, OnInit,Input } from '@angular/core';

//Import del Servicio
import { PedidoService } from "../services/pedido.service";
import { PedidoInterface } from "../models/pedido-interface";
import { Pedido2Interface } from "../models/pedido2-interface";
//ALERTA
import { AlertController, ModalController } from '@ionic/angular';
import { PedidoDetallePage } from "../pedido-detalle/pedido-detalle.page"
//ROUTING

import { Router } from '@angular/router';
// import { resolve } from 'dns';

//IMPORT RxJS
import { Subject } from 'rxjs';
import { HacerPedidoPage } from '../hacer-pedido/hacer-pedido.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @Input() nombre: string = '';

  // @Input() nombre_pedido: string = '';
  // @Input() numero_pedido: string = '';
  // @Input() comentarios: string = '';
  // @Input() total_venta: string = '';

  constructor(public crudService: PedidoService,
    public alertController: AlertController,
    public router: Router,
    private _log: PedidoService,
    public modalCtrl: ModalController) 
    {
      // this.NewNombrePedido.subscribe(palabra => this.palabra = palabra)
    }

  ngOnInit(): void {
    this.crudService.GetPedidosDisponible().subscribe((res: PedidoInterface[]) => {
      this.Pedidos = res;
    })
    this.crudService.GetPedidosCompletados().subscribe((res: Pedido2Interface[]) => {
      this.Pedidos2 = res;
    })
    this.crudService.GetPedidosNoDisponible().subscribe((res: Pedido2Interface[]) => {
      this.Pedidos3 = res;
    })
  }

  


  //intento de Subject
  // private NewNombrePedido: Subject<string> = new Subject<string>();
  //  id_pedido_cabecera: number = 0;
  //  nombre_pedido: string = "";
  //  cantidad: number = 0;
  //  total_venta: number = 0;
  //  comentarios: string = "";
  //  reserva_det_id: number = 0;
  //  estado: string = "";
  //  //Pedido Detalle
  //  id_pedido_detalle: number = 0;
  //  cantidad_producto: number = 0;
  //  productocab_idprod: number = 0;
  //  pedido_cab_id_pedido_cab: number = 0;
  //  Pedidos: PedidoInterface[] = [];
  //  Pedidos2: PedidoInterface[] = [];
  //  Pedidos3: PedidoInterface[] = [];

  // palabra: string = "";

  

  getDataPedidos(
    id_pedido_cabecera,nombre_pedido, cantidad, total_venta, comentarios, reserva_det_id, estado, 
    id_pedido_detalle, cantidad_producto, productocab_idprod, pedido_cab_id_pedido_cab) {

    this.id_pedido_cabecera = id_pedido_cabecera;
    this.nombre_pedido = nombre_pedido;
    this.cantidad= cantidad;
    this.total_venta = total_venta;
    this.comentarios = comentarios;
    this.reserva_det_id = reserva_det_id;
    this.estado = estado;
    this.id_pedido_detalle = id_pedido_detalle;
    this.cantidad_producto = cantidad_producto;
    this.productocab_idprod = productocab_idprod;
    this.pedido_cab_id_pedido_cab = pedido_cab_id_pedido_cab;

     this.palabra = nombre_pedido;
    // return this.palabra;
  }

  
  id_pedido_cabecera: number = 0;
  nombre_pedido: string = "";
  cantidad: number = 0;
  total_venta: number = 0;
  comentarios: string = "";
  reserva_det_id: number = 0;
  estado: string = "";
  //Pedido Detalle
  id_pedido_detalle: number = 0;
  cantidad_producto: number = 0;
  productocab_idprod: number = 0;
  pedido_cab_id_pedido_cab: number = 0;
  Pedidos: PedidoInterface[] = [];
  Pedidos2: PedidoInterface[] = [];
  Pedidos3: PedidoInterface[] = [];

  palabra: string = "";
  comment: string ="";
  ttl_venta: string="";
  nro: string="";
 
  

  hacerPedido(){
    // this.router.navigate(["hacer-pedido"]);

    this.mostrarModal2();
  
  }

  ponerNumero(varNombre: string, varComment: string, varTotal: string, varNro: string) {

    this.palabra = varNombre;
    this.comment = varComment;
    this.ttl_venta = varTotal;
    this.nro = varNro;
    this.mostrarModal();

  }

  //MODAL
  async mostrarModal2() {

    
    
    const modal2 = await this.modalCtrl.create({
      component: HacerPedidoPage,
      componentProps: {
       
       
      }
    });
    await modal2.present();
  }


  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: PedidoDetallePage,
      componentProps: {
       
         nombre_pedido: this.palabra,
         comentarios: this.comment,
         total_venta: this.ttl_venta,
         numero_pedido: this.nro,
       
      }
    });
    
    await modal.present();

    // const { data } = await modal.onDidDismiss();
    const { data } = await modal.onWillDismiss();
    console.log('onWillDismiss');

    console.log(data);

  }

 
  detalle(){
    // this.router.navigate(["pedido-detalle"]);
    this.mostrarModal();
  }

  updatePedido(varReserva: number) {
try{
  this.crudService.UpdatePedido2(varReserva)
  .subscribe((res:PedidoInterface[]) => {
    console.log("1");
    this.Pedidos = res;
    console.log("2");
    this.id_pedido_cabecera=0,

    console.log("3"); 
    console.log(res);
     this.ngOnInit();
     window.location.reload();
  })

}
catch{
  console.log("Hubo un error")
}
    

       }


}


