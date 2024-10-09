import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { Router } from '@angular/router';
import { CursoService } from '../../curso/curso.service';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {
  cursos: { id: number, nome: string, selected: boolean }[] = [];
  aluno: Aluno = new Aluno('', '', '', true); 

  constructor(private alunoService: AlunoService, private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.carregarCursos(); 
  }

  incluirAluno(): void {
    const selectedCursosIds = this.cursos
      .filter(curso => curso.selected)
      .map(curso => curso.id);
    if (!this.aluno.nome || !this.aluno.matricula || !this.aluno.cpf || selectedCursosIds.length === 0) {
      alert('Preencha campos obrigatórios e selecione ao menos um curso.');
      return;
    }

    this.aluno.cursosIds = selectedCursosIds;

    this.alunoService.criarAluno(this.aluno).subscribe(() => {
      this.router.navigate(['/alunos']);
    });
  }

  carregarCursos(): void {
    this.cursoService.listarTodos().subscribe(cursos => {
      this.cursos = cursos
        .filter(curso => curso.id !== undefined)
        .map(curso => ({ id: curso.id!, nome: curso.nome, selected: false }));
    });
  }

  voltar(): void {
    this.router.navigate(['/alunos']);
  }
}
