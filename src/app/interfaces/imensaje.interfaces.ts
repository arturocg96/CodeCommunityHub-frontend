export interface IMensaje {
    id: number;
    emisorId: number;
    receptorId: number;
    contenido: string;
    leido: boolean;
    fechaEnvio: string;
  }