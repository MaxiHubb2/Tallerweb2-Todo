import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TareasComponent {
  nuevaTarea = { titulo: '', descripcion: '', id: 0, completada: false };
  tareas: any[] = [];
  contadorId = 1; 

  agregarTarea() {
    if (this.nuevaTarea.titulo && this.nuevaTarea.descripcion) {
      this.tareas.push({
        ...this.nuevaTarea,
        id: this.contadorId++,
        completada: false,
      });
      this.nuevaTarea = { titulo: '', descripcion: '', id: 0, completada: false };
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  cambiarEstadoTarea(tarea: any) {
    tarea.completada = !tarea.completada;
  }

  //editar tarea
  editarTarea(tarea: any) {
    this.nuevaTarea = tarea;
    this.eliminarTarea(tarea.id);
  }

}
