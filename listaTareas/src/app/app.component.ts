import { Component } from '@angular/core';
import { TareasComponent } from './tareas/tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TareasComponent], // Importamos el componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista de Tareas';
}
