export interface Pedido2Interface {
    id_pedido_cabecera: number,
    nombre_pedido: string,
    cantidad: number,
    total_venta: number,
    comentarios: string,
    reserva_det_id: string,
    estado: string,
    //Pedido Detalle
    id_pedido_detalle: number,
    cantidad_producto: number,
    productocab_idprod: number,
    pedido_cab_id_pedido_cab: number,
    
}