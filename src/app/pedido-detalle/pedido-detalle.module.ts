import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoDetallePageRoutingModule } from './pedido-detalle-routing.module';

import { PedidoDetallePage } from './pedido-detalle.page';

import { ComponentsModule } from '../components/components.module';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab2Page } from '../tab2/tab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoDetallePageRoutingModule,
    ComponentsModule,
    // Tab2Page
    //  Tab2PageModule,
  //  Tab2PageModule
  ],
  declarations: [PedidoDetallePage]
})
export class PedidoDetallePageModule {}
