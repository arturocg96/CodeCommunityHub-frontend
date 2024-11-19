import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private baseUrl = `${environment.API_URL}/api/mensajes`;

  constructor() { }
}
