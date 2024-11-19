import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseUrl = `${environment.API_URL}/api/empresas`;

  constructor() { }
}
