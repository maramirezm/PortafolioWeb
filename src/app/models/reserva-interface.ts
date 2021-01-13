export interface ReservaInterface {
    id_reserva_cabecera: number,
    descripcion: string,
    fecha: Date,
    cliente_rut_cliente: string,
    estado: string,
    //Pedido Detalle
    id_reserva_detalle: number,
    hora_inicio: number,
    hora_termino: number,
    reserva_cab_id: number,
    mesa_id_mesa: number,
    
}

