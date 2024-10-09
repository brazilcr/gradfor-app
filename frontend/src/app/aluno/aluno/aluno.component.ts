import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'matricula', 'cpf', 'ativo', 'cursosIds'];
  dataSource = new MatTableDataSource<Aluno>();

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    this.alunoService.listarTodos().subscribe((data: Aluno[]) => {
      this.dataSource.data = data;
    });
  }
}
