import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
})
export class AlunoListComponent implements OnInit {
  nome: string = "";
  matricula: string = "";
  selectedCursosIds: number[] = [];
  cpf: string = "";
  ativo: boolean = true;
  dataSource = new MatTableDataSource<Aluno>();
  displayedColumns: string[] = ['id', 'nome', 'matricula', 'cpf', 'ativo', 'acoes'];

  constructor(private alunoService: AlunoService, public router: Router) { }

  ngOnInit(): void {
    this.listarAlunos();
  }
  verDetalhes(id: number): void {
    this.router.navigate(['/alunos', id]);
  }
  loadAlunos(): void {
    this.alunoService.listarTodos().subscribe(alunos => {
      this.dataSource.data = alunos;
    });
  }

  listarAlunos(): void {
    this.alunoService.listarTodos().subscribe(
      (alunos) => {
        //console.log(alunos);
        this.dataSource = new MatTableDataSource(alunos);
        //this.dataSource.data = alunos;
      },
      (error) => {
        console.error('Erro ao listar alunos:', error);
      }
    );
  }

  editarAluno(id: number): void {
    this.router.navigate(['/alunos/edit', id]);
  }

  excluirAluno(id: number): void {
    if (confirm('Tem certeza que deseja excluir este aluno?')) {
      this.alunoService.deletarAluno(id).subscribe(() => {
        this.loadAlunos();
      });
    }
  }

  incluirAluno(): void {
    const novoAluno: Aluno = {
      nome: this.nome,
      matricula: this.matricula,
      cpf: this.cpf,
      ativo: this.ativo,
      cursosIds: this.selectedCursosIds || []
    };

    this.alunoService.criarAluno(novoAluno).subscribe((aluno) => {
      console.log('Aluno criado com sucesso', aluno);
    }, (error) => {
      console.error('Erro ao criar aluno', error);
    });
  }
  navegarParaCriarAluno(): void {
    this.router.navigate(['/alunos/create']);
  }
}
