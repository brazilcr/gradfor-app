package io.github.gradfor.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CursoSimplesDTO {
    public CursoSimplesDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }
    private Long id;
    private String nome;
}
