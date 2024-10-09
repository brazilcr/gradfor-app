import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.alunoService.getAlunoById(+id).subscribe((data: Aluno) => {
        this.aluno = data;
      });
    }
  }
}
