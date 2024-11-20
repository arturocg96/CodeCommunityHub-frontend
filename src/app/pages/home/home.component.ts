import { Component } from '@angular/core';
import { PresentacionComponent } from '../../components/presentacion/presentacion.component';
import { EmpresasComponent } from '../../components/empresas/empresas.component';
import { DesarrolladoresComponent } from '../../components/desarrolladores/desarrolladores.component';
import { TrabajaConNosotrosComponent } from '../../components/trabaja-con-nosotros/trabaja-con-nosotros.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PresentacionComponent, EmpresasComponent, DesarrolladoresComponent, TrabajaConNosotrosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

}
