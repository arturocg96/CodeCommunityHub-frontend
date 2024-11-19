import { IUsuario } from './iusuario.interface';

export interface IDesarrollador extends IUsuario {
    precioHora?: number;
    salarioAnual?: number;
    disponibilidad: boolean;
    cv?: string;
}

