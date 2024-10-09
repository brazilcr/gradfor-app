package io.github.gradfor.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length=100)
    private String nome;

    @Column(nullable = false, unique = true, length=18)
    private String matricula;

    @Column(nullable = false, unique = true, length=11)
    private String cpf;

    @Getter
    @Setter
    @ManyToMany
    @JoinTable(
            name = "aluno_curso",
            joinColumns = @JoinColumn(name = "aluno_id"),
            inverseJoinColumns = @JoinColumn(name = "curso_id")
    )
    private Set<Curso> cursos = new HashSet<>();

    private Boolean ativo;

    // getters e setters
    public void setCursos(Set<Curso> cursos) {
        this.cursos = cursos;
    }
}

