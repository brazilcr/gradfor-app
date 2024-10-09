export class Aluno {
  id?: number;
  nome: string;
  matricula: string;
  cpf: string;
  ativo: boolean;
  cursosIds?: number[]; 

  constructor(nome: string, matricula: string, cpf: string, ativo: boolean, cursosIds?: number[]) {
    this.nome = nome;
    this.matricula = matricula;
    this.cpf = cpf;
    this.ativo = ativo;
    this.cursosIds = cursosIds;
  }
}
