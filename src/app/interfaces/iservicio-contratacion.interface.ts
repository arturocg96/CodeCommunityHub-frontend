export interface IServicioContratacion {
    id: number;
    empresa_id: number;
    descripcion: string;
    estado: 'pendiente' | 'en_proceso' | 'completada';
    fecha_solicitud: string;
  }