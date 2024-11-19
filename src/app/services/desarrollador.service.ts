import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesarrolladorService {

  private baseUrl = `${environment.API_URL}/api/desarrolladores`;

  constructor() { }
}
