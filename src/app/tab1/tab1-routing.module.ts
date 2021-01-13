import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'reservar',
    loadChildren: () => import('../reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  // {
  //   path: 'hacer-pedido',
  //   loadChildren: () => import('../hacer-pedido/hacer-pedido.module').then( m => m.HacerPedidoPageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
