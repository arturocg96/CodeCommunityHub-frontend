import { IUsuario } from  './iusuario.interface';

export interface IEmpresa extends IUsuario {
  razon_social: string;
  telefono?: string;
  ubicacion?: string;
  sitio_web?: string;
}