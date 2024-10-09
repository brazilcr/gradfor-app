import { Component } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent {
  aluno: Aluno = new Aluno('', '', '', true); // Inicializa o aluno

  constructor(private alunoService: AlunoService, private router: Router) {}

  criarAluno(): void {
    this.alunoService.criarAluno(this.aluno).subscribe(() => {
      this.router.navigate(['/alunos']);
    });
  }
}
