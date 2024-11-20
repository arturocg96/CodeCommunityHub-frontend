// trabaja-con-nosotros.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrabajaConNosotrosService {
  private baseUrl = `${environment.API_URL}/api/trabaja-con-nosotros`;

  constructor(private http: HttpClient) {}

  // Métodos CRUD o cualquier funcionalidad relacionada con solicitudes de trabaja con nosotros
}
