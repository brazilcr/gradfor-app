package io.github.gradfor.dto;

import io.github.gradfor.entity.Aluno;
import io.github.gradfor.entity.Curso;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class AlunoDTO {
    private Long id;
    private String nome;
    private String matricula;
    private String cpf;
    private Boolean ativo;
    private List<CursoInfoDTO> cursos;
    public AlunoDTO() {};
    public AlunoDTO(Aluno aluno) {
        this.id = aluno.getId();
        this.nome = aluno.getNome();
        this.matricula = aluno.getMatricula();
        this.cpf = aluno.getCpf();
        this.ativo = aluno.getAtivo();
        this.cursos = aluno.getCursos().stream()
                .map(curso -> new CursoInfoDTO(curso.getId(), curso.getNome())) // Mapeia para id e nome
                .collect(Collectors.toList());
    }

    private List<Long> cursosIds;

    public void setCursosIds(List<Long> cursosIds) {
        this.cursosIds = cursosIds;
    }


}

