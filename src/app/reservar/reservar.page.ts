import { Component, OnInit, Input } from '@angular/core';
import { ReservaService } from "../services/reserva.service";
import { ReservaInterface } from "../models/reserva-interface";
//ALERTA
import { AlertController, ModalController } from '@ionic/angular';
//ROUTING

import { Router } from '@angular/router';
// import { resolve } from 'dns';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {

  @Input() rut: string = sessionStorage.getItem('rut');
  
  
  constructor(public crudService: ReservaService,
    public alertController: AlertController,
    public router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.crudService.GetReservas().subscribe((res: ReservaInterface[]) => {
      this.Reservas = res;
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
    header: 'RESERVA GUARDADA',
    subHeader: '',
    message: '',
    buttons: ['OK']
  });

  await alert.present();
  // this.router.navigate(['/tabs/tab1']);
  this.modalCtrl.dismiss();
  window.location.reload();
}

async alertaConfirmar2() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Ya hay alguien reservando su mesa entre las horas' + this.hora_inicio + ' y ' + this.hora_termino,
    subHeader: '',
    message: '',
    buttons: ['OK']
  });

  await alert.present();
  this.router.navigate(['/tabs/tab1']);
}

async alertaConfirmar3() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: this.Reservas2.length.toString(),
    subHeader: '',
    message: '',
    buttons: ['OK']
  });

  await alert.present();
  this.router.navigate(['/tabs/tab1']);
}

confirmar() {
  console.log('1');
  if(this.confirmacion = true)
  {try{
    console.log('2');
    //this.buscarReserva();
    this.addReservaSP();
    console.log('4');
    this.alertaConfirmar();
    console.log('5');
    
    
  }
  catch (err) {
    //Retorna mensaje de error
    return (err.message);
}

    
  }
  else{
    console.log('NO GUARDADO');
  }
}

    //id_reserva_cabecera: number=0;
    descripcion: string = "";
    fecha: Date=null;
    cliente_rut_cliente: string=this.rut;
    estado: string="1";
    //Pedido Detalle
    //id_reserva_detalle: number=0;
    hora_inicio: number=0;
    hora_termino: number=0;
    //reserva_cab_id: number=0;
    mesa_id_mesa: number=0;

    descripcion2: string = "";
    fecha2: Date=null;
    cliente_rut_cliente2: string="";
    estado2: string="1";
    //Pedido Detalle
    //id_reserva_detalle: number=0;
    hora_inicio2: number=0;
    hora_termino2: number=0;
    //reserva_cab_id: number=0;
    mesa_id_mesa2: number=0;

    fechaVar: string="";
    mesVar: string="";
    varUs: string="Byron";

    Reservas: ReservaInterface[] = [];
    Reservas2: ReservaInterface[] = [];

/*
addReserva() {
  this.crudService.InsertReserva(this.id_reserva_cabecera, this.descripcion, this.fecha, this.cliente_rut_cliente, this.estado,
  this.id_reserva_detalle, this.hora_inicio, this.hora_termino, this.reserva_cab_id, this.mesa_id_mesa)
    .subscribe((res:ReservaInterface[]) => {
      this.Reservas = res;
      this.id_reserva_cabecera=0; 
      this.descripcion=""; 
      this.fecha=null; 
      this.cliente_rut_cliente=""; 
      this.estado="";
      this.id_reserva_detalle=0; 
      this.hora_inicio=0; 
      this.hora_termino=0; 
      this.reserva_cab_id=0; 
      this.mesa_id_mesa=0;
    })
  }
*/
  addReservaSP() {
    console.log('2');
    this.crudService.InsertReservaSP(this.descripcion, this.fecha, this.cliente_rut_cliente, this.estado,
    this.hora_inicio, this.hora_termino, this.mesa_id_mesa)
      .subscribe((res:ReservaInterface[]) => {
        this.Reservas = res;
        this.descripcion=""; 
        this.fecha=null; 
        this.cliente_rut_cliente= ""; 
        this.estado=""; 
        this.hora_inicio=0; 
        this.hora_termino=0;  
        this.mesa_id_mesa=0;
      })
      console.log('3');
    }
  buscarReservaSP() {
    console.log('2');
    if(this.varUs="Byron"){
      this.mesVar = "ERR";
      if(this.fecha.toString().substring(3,6)=="jan"){
        this.mesVar = "01";
      }
      if(this.fecha.toString().substring(3,6)=="feb"){
        this.mesVar = "02";
      }
      if(this.fecha.toString().substring(3,6)=="mar"){
        this.mesVar = "03";
      }
      if(this.fecha.toString().substring(3,6)=="apr"){
        this.mesVar = "04";
      }
      if(this.fecha.toString().substring(3,6)=="may"){
        this.mesVar = "05";
      }
      if(this.fecha.toString().substring(3,6)=="jun"){
        this.mesVar = "06";
      }
      if(this.fecha.toString().substring(3,6)=="jul"){
        this.mesVar = "07";
      }
      if(this.fecha.toString().substring(3,6)=="aug"){
        this.mesVar = "08";
      }
      if(this.fecha.toString().substring(3,6)=="sep"){
        this.mesVar = "09";
      }
      if(this.fecha.toString().substring(3,6)=="oct"){
        this.mesVar = "10";
      }
      if(this.fecha.toString().substring(3,6)=="nov"){
        this.mesVar = "11";
      }
      if(this.fecha.toString().substring(3,6)=="dec"){
        this.mesVar = "12";
      }
      this.fechaVar= this.fecha.toString().substring(7,11) + "-" + this.mesVar + "-" + this.fecha.toString().substring(0,2) + "T03:00:00.000Z";
      
    }
    if(this.varUs=="Miguel"){
      this.fechaVar= this.fecha.toString().substring(6,10) + "-" + this.fecha.toString().substring(3,5) + "-"  + this.fecha.toString().substring(0,2) + "T03:00:00.000Z";
    }
    
    this.crudService.BuscarReservas(this.hora_inicio, this.hora_termino
      //, this.fechaVar
      )
    .subscribe((res2:ReservaInterface[]) => {
    this.Reservas2 = res2;
    })
    this.alertaConfirmar3()
    console.log('3');
  }
};



// console.log(localStorage.getItem('ClienteLogueado' && 'rut_cliente'));

