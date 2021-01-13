import { Component, OnInit } from '@angular/core';
//Import del Servicio
import { UserService } from "../services/user.service";
import { UserInterface } from "../models/user-interface";
//Import del Servicio CLIENTE
import { ClienteService } from "../services/cliente.service";
import { ClienteInterface } from "../models/cliente-interface";



import { Router } from '@angular/router';




@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {


  
  showPassword = false;
  passwordToggleIcon = 'eye';

 constructor(public crudService: ClienteService,public auth: ClienteService,
  
  public router: Router,) { } 

  

  ngOnInit() {

       this.crudService.GetClientes().subscribe((res: ClienteInterface[]) => {
        this.Clientes = res;
      
  })
}

 

  togglePassword():void {
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye'){

      this.passwordToggleIcon = 'eye-off'

    }else {
      this.passwordToggleIcon = 'eye'
    }

  }
  


  rut_cliente: string = "";
  contrasenna: string = "";
  Clientes: ClienteInterface[] = []

 



 login(){this.crudService.Login3(this.rut_cliente,  this.contrasenna, )
 .subscribe((res:ClienteInterface[]) => {
     this.Clientes = res;     
     this.rut_cliente = "";
     this.contrasenna = "";  
 })
 }

botonLogin(){
  try{
    // this.login();
    sessionStorage.setItem('rut', this.rut_cliente);
    this.login2();
    
  }
  catch{
    
    console.log("Usuario no existe");
  
  }
}


//ESTE LOGIN FINAL
login2(){
  console.log('0');
  this.auth.Login3(this.rut_cliente, this.contrasenna).subscribe((res) => {
    console.log('1');
    
    if (res["msg"]) {
      console.log('2');
      let Clientes: ClienteInterface = res['Datauser'];
      console.log('3');
      this.auth.setCurrentUser(Clientes);
      console.log('4');
      this.router.navigate(['/tabs/tab1'])
    } else {
        console.log("Credenciales Incorrectas");
    }
  })

}

}




