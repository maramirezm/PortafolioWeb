import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  children: [

    {
      path: 'hacer-pedido',
      loadChildren: () => import('../hacer-pedido/hacer-pedido.module').then( m => m.HacerPedidoPageModule)
    },
    {
      path: 'pedido-detalle',
      loadChildren: () => import('../pedido-detalle/pedido-detalle.module').then( m => m.PedidoDetallePageModule)
    }
  ]
}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
