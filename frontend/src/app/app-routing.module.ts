import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno/aluno.component';
import { CursoComponent } from './curso/curso/curso.component';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';
import { AlunoDetailsComponent } from './aluno/aluno-details/aluno-details.component';
import { AlunoEditComponent } from './aluno/aluno-edit/aluno-edit.component';
import { AlunoCreateComponent } from './aluno/aluno-create/aluno-create.component';

const routes: Routes = [
  { path: 'alunos', component: AlunoListComponent },
  { path: 'alunos/create', component: AlunoCreateComponent },
  { path: 'alunos/edit/:id', component: AlunoEditComponent },
  { path: 'alunos/:id', component: AlunoDetailsComponent },
  { path: '', redirectTo: '/alunos/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }