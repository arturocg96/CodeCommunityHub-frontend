import { IUsuario } from './iusuario.interface';

export interface IEmpresa extends IUsuario {
    razonSocial: string;
    telefono?: string;
    ubicacion?: string;
    sitioWeb?: string;
  }