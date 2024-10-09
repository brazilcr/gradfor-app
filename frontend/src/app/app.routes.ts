import { Routes } from '@angular/router';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';
import { AlunoDetailsComponent } from './aluno/aluno-details/aluno-details.component';

const routes: Routes = [
    { path: 'alunos', component: AlunoListComponent },
    { path: 'alunos/:id', component: AlunoDetailsComponent },
    // outras rotas
  ];
