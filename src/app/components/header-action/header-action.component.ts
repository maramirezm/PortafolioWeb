import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-header-action',
  templateUrl: './header-action.component.html',
  styleUrls: ['./header-action.component.scss'],
})
export class HeaderActionComponent implements OnInit {

  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere...',
      duration: 200
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  ngOnInit() {
  }

  @Input() titulo: string = '';

  private contador: number = 1;
  // private buttonColor: string = "danger";
  // private label: string = "Activar";
  private color: string ="white";

  someAction() {


    //this.presentLoading();

    // if (this.contador == 1)
    // {
    //   this.presentLoading();

    //   this.label = "Desactivar";
    //   this.buttonColor = "success";
    //   this.contador = 0;
    //   this.color = "white";
    // }
    // else
    // {
    //   this.presentLoading();
    //   this.label = "Activar";
    //   this.buttonColor = "danger";
    //   this.contador = 1;
    //   this.color = "white";
    // }

  }
}
