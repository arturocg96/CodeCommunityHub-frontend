// tecnologia.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TecnologiaService {
  private baseUrl = `${environment.API_URL}/api/tecnologias`;

  constructor(private http: HttpClient) {}

  // Métodos CRUD o cualquier funcionalidad relacionada con tecnologías
}
