import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
})
export class AlunoListComponent implements OnInit {
  dataSource: Aluno[] = [];
  displayedColumns: string[] = ['id', 'nome', 'acoes'];

  constructor(private alunoService: AlunoService, private router: Router) {}

  ngOnInit(): void {
    this.listarAlunos();
  }
  verDetalhes(id: number): void {
    console.log(id);
    this.router.navigate(['/alunos', id]);
  }

  listarAlunos(): void {
    this.alunoService.listarTodos().subscribe((alunos) => {
      this.dataSource = alunos;
    });
  }

  editarAluno(id: number): void {
    this.router.navigate(['/alunos/edit', id]);
  }

  deletarAluno(id: number): void {
    this.alunoService.deletarAluno(id).subscribe(() => {
      this.listarAlunos(); // Atualiza a lista após deletar
    });
  }
  incluirAluno() {
   // this.router.navigate(['/alunos/incluir']); // Ajuste a rota conforme necessário
    this.router.navigate(['/alunos/create']);
  }

}
