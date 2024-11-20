export interface IMensaje {
    id: number;
    emisor_id: number;
    receptor_id: number;
    contenido: string;
    leido: boolean;
    fecha_envio: string;
  }