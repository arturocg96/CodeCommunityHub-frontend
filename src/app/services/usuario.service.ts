import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl = `${environment.API_URL}/api/usuarios`;

  constructor(private http: HttpClient) {}

 
}
