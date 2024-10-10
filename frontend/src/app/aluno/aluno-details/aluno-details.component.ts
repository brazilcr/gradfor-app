import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-details',
  templateUrl: './aluno-details.component.html',
  styleUrls: ['./aluno-details.component.css']
})
export class AlunoDetailsComponent implements OnInit {
  aluno!: Aluno; 

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.alunoService.getAlunoById(id).subscribe(aluno => {
        this.aluno = aluno;
      });
    });
  }

  excluirAluno(): void {
    if (this.aluno && this.aluno.id) {
      this.alunoService.deletarAluno(this.aluno.id).subscribe(() => {
      });
    }
  }
  editarAluno(): void {
    this.router.navigate(['/alunos/edit', this.aluno.id]);
  }
  

  voltar(): void {
    this.router.navigate(['/alunos']);
  }
}
