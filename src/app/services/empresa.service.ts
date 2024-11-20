// empresa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private baseUrl = `${environment.API_URL}/api/empresas`;

  constructor(private http: HttpClient) {}

  // Métodos CRUD o cualquier funcionalidad relacionada con empresas
}
