import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from '../../curso/curso.service';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.css']
})
export class AlunoEditComponent implements OnInit {
  aluno: Aluno = new Aluno('', '', '', true);
  cursos: { id: number; nome: string; selected: boolean }[] = [];
  selectedCursosIds: number[] = [];

  constructor(
    private alunoService: AlunoService,
    private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carregarAluno(Number(id));
    }
    this.carregarCursos();
  }

  carregarAluno(id: number): void {
    this.alunoService.buscarAlunoPorId(id.toString()).subscribe(aluno => {
      this.aluno = aluno;
      this.selectedCursosIds = aluno.cursosIds || [];
      this.carregarCursos();
    });
  }

  carregarCursos(): void {
    this.cursoService.listarTodos().subscribe(cursos => {
      this.cursos = cursos
        .filter(curso => curso.id !== undefined) 
        .map(curso => ({
          id: curso.id!, // asserção não nula
          nome: curso.nome,
          selected: this.selectedCursosIds.includes(curso.id!) 
        }));
    });
  }

  marcarCursosSelecionados(): void {
    this.cursos.forEach(curso => {
      curso.selected = this.selectedCursosIds.includes(curso.id!);
    });
  }

  atualizarAluno(): void {
    if (this.aluno.id !== undefined) {
      // Atualiza a lista de IDs dos cursos selecionados
      this.selectedCursosIds = this.cursos
        .filter(curso => curso.selected)
        .map(curso => curso.id!);

      const alunoAtualizado = {
        id: this.aluno.id,
        nome: this.aluno.nome,
        matricula: this.aluno.matricula,
        cpf: this.aluno.cpf,
        ativo: this.aluno.ativo,
        cursosIds: this.selectedCursosIds
      };

      //console.log('Cursos selecionados:', alunoAtualizado.cursosIds); // Verifique aqui
      this.alunoService.atualizarAluno(this.aluno.id, alunoAtualizado).subscribe(() => {
        this.router.navigate(['/alunos']);
      });
    } else {
      alert('ID do aluno é inválido.');
    }
  }

  voltar(): void {
    this.router.navigate(['/alunos']);
  }
}
