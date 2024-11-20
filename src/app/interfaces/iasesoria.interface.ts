export interface IAsesoria {
    id: number;
    desarrollador_id: number;
    tipo: 'laboral' | 'educativa';
    estado: 'pendiente' | 'en_proceso' | 'completada';
    fecha_solicitud: string;
  }