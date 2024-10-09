package io.github.gradfor.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length=100)
    private String nome;

    @ManyToMany(mappedBy = "cursos")
    private List<Aluno> alunos;

    // getters e setters
}
