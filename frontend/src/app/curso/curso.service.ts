import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl = 'http://localhost:8080/api/cursos';

  constructor(private http: HttpClient) { }

  // GET: Obter todos os cursos
  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  // POST: Criar novo curso
  criarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  // PUT: Atualizar curso existente
  atualizarCurso(id: number, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/${id}`, curso);
  }

  // DELETE: Remover curso
  deletarCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
