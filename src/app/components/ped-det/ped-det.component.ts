import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ped-det',
  templateUrl: './ped-det.component.html',
  styleUrls: ['./ped-det.component.scss'],
})
export class PedDetComponent implements OnInit {

  @Input() nombre_pedido: string = '';
  @Input() numero_pedido: string = '';
  @Input() comentarios: string = '';
  @Input() total_venta: string = '';

  constructor() { }

  ngOnInit() {}

}
