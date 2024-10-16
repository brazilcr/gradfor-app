import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiUrl = 'http://localhost:8080/api/alunos';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  criarAluno(aluno: Aluno): Observable<Aluno> {
    //console.log(aluno);
    return this.http.post<Aluno>(this.apiUrl, aluno);
  }

  atualizarAluno(id: number, aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.apiUrl}/${id}`, aluno);
  }

  deletarAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAlunoById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/ver/${id}`);
  }
  buscarAlunoPorId(id: string): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/ver/${id}`);
  }
  
  createAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiUrl, aluno);
  }
}
