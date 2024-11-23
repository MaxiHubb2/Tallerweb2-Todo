import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private apiUrl = 'http://localhost:3000/tareas';

  constructor(private http: HttpClient) {}

  getTareas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTarea(tarea: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tarea);
  }

  updateTarea(id: number, tarea: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tarea);
  }

  deleteTarea(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
