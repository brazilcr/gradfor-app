import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno/aluno.component';
import { AlunoListComponent } from './aluno/aluno-list/aluno-list.component';
import { AlunoDetailsComponent } from './aluno/aluno-details/aluno-details.component';
import { AlunoCreateComponent } from './aluno/aluno-create/aluno-create.component';
import { AlunoEditComponent } from './aluno/aluno-edit/aluno-edit.component';
import { AlunoModule } from './aluno/aluno.module';

@NgModule({
  declarations: [
    AppComponent,
  //  AlunoComponent,
 //   AlunoListComponent,
 //   AlunoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlunoModule,
    //AlunoCreateComponent,
    //AlunoEditComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
