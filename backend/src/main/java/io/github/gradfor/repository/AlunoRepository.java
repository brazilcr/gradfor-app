package io.github.gradfor.repository;

import io.github.gradfor.entity.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    List<Aluno> findAll();
    List<Aluno> findByAtivo(Boolean ativo);
    List<Aluno> findByNomeContaining(String name);
    List<Aluno> findByCursos_Id(Long cursoId);  // Usar cursos_Id para ManyToMany

    //@Query("SELECT a FROM Aluno a JOIN a.cursos c ORDER BY c.nome")
    //List<Aluno> findAllWithCursosSorted();


}
