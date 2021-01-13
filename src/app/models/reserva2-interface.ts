export interface Reserva2Interface {

    //Reserva Cabecera
    id_reserva_cabecera: number,
    descripcion: string,
    fecha: Date,
    cliente_rut_cliente: string,
    //Reserva Detalle
    id_reserva_detalle: number,
    hora_inicio: number,
    hora_termino: number,
    //CheckPoint
    //reserva_cab_id_reserva_cab: number,
    reserva_cab_id: number,
    mesa_id_mesa: number
}