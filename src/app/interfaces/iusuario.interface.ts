export interface IUsuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
  rol: 'administrador' | 'empresa' | 'desarrollador';
  foto?: string;
  link?: string;
  validado: boolean;
  activo: boolean;
  fechaCreacion: string;
}
