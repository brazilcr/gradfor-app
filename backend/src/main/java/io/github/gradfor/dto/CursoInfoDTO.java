package io.github.gradfor.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CursoInfoDTO {
    private Long id;
    private String nome;

    public CursoInfoDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

}
