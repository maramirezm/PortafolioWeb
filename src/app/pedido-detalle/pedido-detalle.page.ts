import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

//TERCER 
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

//Import Rxjs

import { BehaviorSubject } from 'rxjs';
import { PedidoService } from '../services/pedido.service';

import { PDFGenerator } from '@ionic-native/pdf-generator';

//Import Services, interface Pedido
//import { PedidoService } from "../services/pedido.service";
import { PedidoInterface } from "../models/pedido-interface";
//  import { Reserva2Interface } from "../models/reserva2-interface";
//  import { Reserva3Interface } from "../models/reserva3-interface";

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.page.html',
  styleUrls: ['./pedido-detalle.page.scss'],

})
export class PedidoDetallePage implements OnInit  {

  @Input() nombre_pedido: string = '';
  @Input() numero_pedido: string = '';
  @Input() comentarios: string = '';
  @Input() total_venta: string = '';


    constructor(private modalCtrl: ModalController,
      public crudService: PedidoService) {
      
      
    }



    ngOnInit(){
      
    
    }

  id_pedido_cabecera: number = 0;
  //nombre_pedido: string = "";
  cantidad: number = 0;
  //total_venta: number = 0;
  //comentarios: string = "";
  reserva_det_id: number = 0;
  estado: string = "4";
  //Pedido Detalle
  //id_pedido_detalle: number = 0;
  //cantidad_producto: number = 0;
  //productocab_idprod: number = 0;
  Pedidos: PedidoInterface[] = [];

    updatePedido(varPedido: number) {

      this.crudService.UpdatePedido(varPedido)
      .subscribe((res:PedidoInterface[]) => {
        console.log("1");
        this.Pedidos = res;
        console.log("2");
        this.id_pedido_cabecera=0,
   
        console.log("3"); 
        console.log(res);
        this.generatePdf();
        // this.ngOnInit();
        //this.modalCtrl.dismiss();

        setTimeout(function () {
        window.location.reload();
        }, 2000);
    
  
       
      })
    }
    
    generatePdf(){
      const documentDefinition = { 
        content: [
          {
            text: 'COMPROBANTE DE PAGO',
            bold: true,
            fontSize: 20,
            alignment: 'center',
            margin: [0, 0, 0, 20]
          },
          {
            text: 'RESTAURANT SIGLO XXI',
            bold: true,
            fontSize: 14,
            alignment: 'center',
            margin: [0, 0, 0, 20]
          },
          {
            layout: 'lightHorizontalLines', // optional
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
              widths: [ '*', 'auto', 100, '*' ],
      
              body: [
                [ 'ID Pedido', 'Nombre Pedido', 'Comentarios', 'Valor' ],
                [ this.numero_pedido, this.nombre_pedido, this.comentarios, '$' + this.total_venta ],
                [ { text: 'VALOR TOTAL', bold: true }, '', '', '$' + this.total_venta ]
              ]
            }
          },
          {
            text: 'Acercate a Caja, o pidele al garzón que lo haga.',
            bold: true,
            fontSize: 11,
            alignment: 'center',
            margin: [0, 0, 0, 20]
          },
        ],
       };
      pdfMake.createPdf(documentDefinition).open();
      this.modalCtrl.dismiss();
     }


     getDocumentDefinition() {
      
      return {
        content: [
          {
            text: 'BOLETA ELECTRONICA',
            bold: true,
            fontSize: 20,
            alignment: 'center',
            margin: [0, 0, 0, 20]
          },
          {
            columns: [
              [{
                text: '1',
                style: 'name'
              },
              {
                text: ''
              },
              {
                text: 'Email : ' ,
              },
              {
                text: 'Contant No : ' ,
              },
              {
                text: 'GitHub: ' ,
                link: '',
                color: 'blue',
              }
              ],
              [
                
              ]
            ]
          },
          {
            text: 'Skills',
            style: 'header'
          },
          {
            columns : [
              {
                ul : [
                  
                ]
              },
              {
                ul : [
                  
                ]
              },
              {
                ul : [
                  
                ]
              }
            ]
          },
          {
            text: 'Experience',
            style: 'header'
          },
          
  
          {
            text: 'Education',
            style: 'header'
          },
          
          {
            text: 'Other Details',
            style: 'header'
          },
          {

          },
          {
            text: 'Signature',
            style: 'sign'
          },
          {
            columns : [
            
            ]
          }
        ],
        info: {
          title: 'RESUME',
          author: 'RESUME',
          subject: 'RESUME',
          keywords: 'RESUME, ONLINE RESUME',
        },
          styles: {
            header: {
              fontSize: 18,
              bold: true,
              margin: [0, 20, 0, 10],
              decoration: 'underline'
            },
            name: {
              fontSize: 16,
              bold: true
            },
            jobTitle: {
              fontSize: 14,
              bold: true,
              italics: true
            },
            sign: {
              margin: [0, 50, 0, 10],
              alignment: 'right',
              italics: true
            },
            tableHeader: {
              bold: true,
            }
          }
      };
    }


    palabra: string = "";
    comment: string ="";
    ttl_venta: string="";
    nro: string="";

    ponerEnPDF(varNombre: string, varComment: string, varTotal: string, varNro: string) {
      this.palabra = varNombre;
      this.comment = varComment;
      this.ttl_venta = varTotal;
      this.nro = varNro;
  
    }


   

    dispose(){
      this.modalCtrl.dismiss();
    }
  
  

}
