import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitacionService {

  private baseUrl = `${environment.API_URL}/api/invitaciones`;

  constructor() { }
}
