export interface IUsuario {
    id: number;
    nombre: string;
    apellidos?: string;
    email: string;
    password: string;
    rol: 'administrador' | 'empresa' | 'desarrollador';
    foto?: string;
    link?: string;
    validado?: boolean;
    activo?: boolean;
    fecha_creacion: string;
  }
  