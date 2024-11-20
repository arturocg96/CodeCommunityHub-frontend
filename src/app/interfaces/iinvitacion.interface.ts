export interface IInvitacion {
    id: number;
    empresa_id: number;
    desarrollador_id: number;
    estado: 'pendiente' | 'aceptada' | 'rechazada';
    fecha_envio: string;
  }