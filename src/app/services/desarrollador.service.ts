import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DesarrolladorService {
  private baseUrl = `${environment.API_URL}/api/desarrolladores`;

  constructor(private http: HttpClient) {}


}
