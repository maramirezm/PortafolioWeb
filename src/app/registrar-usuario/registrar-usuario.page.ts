import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../services/cliente.service";
import { ClienteInterface } from "../models/cliente-interface";
//ALERTA
import { AlertController } from '@ionic/angular';
//ROUTING

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Ng2Rut, RutValidator } from 'ng2-rut';
// import { resolve } from 'dns';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {
  loginForm: FormGroup;
  reactiveForm: FormGroup;
  
  constructor(public crudService: ClienteService,
    public alertController: AlertController,
    public router: Router,
    // private fb: FormBuilder
   
    ) {
      
    
    }

  ngOnInit(): void {
    this.crudService.GetClientes().subscribe((res: ClienteInterface[]) => {
      this.Clientes = res;
    })

}

// initForm(): void {
//   this.loginForm = this.fb.group({
//      correo: ['', [Validators.required,
//      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],

//     contrasenna: ['', Validators.required],
//     nombre_cliente: ['', Validators.required] 
//   });

// }

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
    header: 'CLIENTE GUARDADO',
    subHeader: '',
    message: '',
    buttons: ['OK']
  });

  await alert.present();
  this.router.navigate(['/ingresar']);
}

confirmar() {

  if(this.confirmacion = true)
  {
    this.addCliente();
    this.alertaConfirmar();
  }
  else{
    console.log('NO GUARDADO');
  }
}


    nombre_cliente: string = "";
    contrasenna: string = "";
    direccion: string = "";
    telefono: string = "";
    restaurant_id_restaurant: number = 1;
    rut_cliente: string ="";
    correo: string = "";
    Clientes: ClienteInterface[] = [];

addCliente() {
  this.crudService.InsertCliente(this.nombre_cliente, this.contrasenna, this.direccion, this.telefono, this.restaurant_id_restaurant, this.rut_cliente, this.correo )
    .subscribe((res:ClienteInterface[]) => {
      this.Clientes = res;
      this.contrasenna = "";
      this.direccion = "";
      this.telefono = "";
      this.restaurant_id_restaurant = 1;
      this.rut_cliente ="";
      this.correo="";
    })
  }
}