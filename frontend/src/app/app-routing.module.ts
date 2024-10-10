import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno/aluno.component';
import { CursoComponent } from './curso/curso/curso.component';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';
import { AlunoDetailsComponent } from './aluno/aluno-details/aluno-details.component';
import { AlunoEditComponent } from './aluno/aluno-edit/aluno-edit.component';
import { AlunoCreateComponent } from './aluno/aluno-create/aluno-create.component';
import { LoginComponent } from './components/login/login.component';
import { UserInfosComponent } from './components/user-infos/user-infos.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'login', component: LoginComponent },  
  { path: 'alunos', component: AlunoListComponent },
  { path: 'alunos', component: AlunoListComponent },
  { path: 'alunos/list', component: AlunoListComponent },
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