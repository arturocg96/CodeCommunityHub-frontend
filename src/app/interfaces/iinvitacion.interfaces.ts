export interface IInvitacion {
    id: number;
    empresaId: number;
    desarrolladorId: number;
    estado: 'pendiente' | 'aceptada' | 'rechazada';
    fechaEnvio: string;
  }