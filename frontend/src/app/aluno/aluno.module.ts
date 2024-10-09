import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoCreateComponent } from './aluno-create/aluno-create.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';
import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';

@NgModule({
  declarations: [
    AlunoComponent,
    AlunoCreateComponent,
    AlunoListComponent,
    AlunoEditComponent,
    AlunoDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule.forRoot([]) 
  ]
})
export class AlunoModule {}
