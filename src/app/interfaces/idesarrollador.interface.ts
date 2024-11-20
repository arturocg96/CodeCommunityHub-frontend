import { IUsuario } from  './iusuario.interface';

export interface IDesarrollador extends IUsuario {
  estudios?: string;
  sobre_mi?: string;
  experiencia: 'sin_experiencia' | 'menos_de_un_ano' | 'entre_1_y_3_anos' | 'entre_3_y_5_anos' | 'entre_5_y_10_anos' | 'mas_de_10_anos';
  puntuacion: number;
  tecnologias?: string;
  localizacion?: string;
  salario_anual?: number;
  disponibilidad: boolean;
  cv?: string;
}