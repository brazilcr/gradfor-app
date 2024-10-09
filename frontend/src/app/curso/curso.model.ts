export class Curso {
    id?: number; // ID do curso, opcional para novas criações
    nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  }
  