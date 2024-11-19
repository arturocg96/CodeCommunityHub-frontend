import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private baseUrl = `${environment.API_URL}/api/tecnologias`;
  constructor() { }
}
