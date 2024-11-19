import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private baseUrl = `${environment.API_URL}/api/servicios`;

  constructor() { }
}
