package io.github.gradfor.dto;

import io.github.gradfor.entity.Aluno;
import lombok.Getter;

import java.util.List;

@Getter
public class CursoDTO {
    private Long id;
    private String nome;
    private String matricula;
    private String cpf;
    private List<CursoDTO> cursosIds;
    private boolean ativo;

    public CursoDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    // Getters e Setters
}
