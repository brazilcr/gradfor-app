import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; // Importe aqui
import { FormsModule } from '@angular/forms';
import { AlunoCreateComponent } from './aluno-create/aluno-create.component';
//import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';

@NgModule({
  declarations: [
    AlunoCreateComponent,
    //AlunoListComponent,
    AlunoEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
  ]
})
export class AlunoModule {}
