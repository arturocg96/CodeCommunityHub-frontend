export interface ITrabajaConNosotros {
    id: number;
    nombre: string;
    email: string;
    tipo: 'reclutador' | 'asesor_laboral' | 'asesor_educativo';
    experiencia: string;
    estado: 'pendiente' | 'aprobada' | 'rechazada';
    fecha_solicitud: string;
  }
  