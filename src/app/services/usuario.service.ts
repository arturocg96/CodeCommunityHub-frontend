import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = `${environment.API_URL}/api/usuarios`;

  constructor() { }
}
