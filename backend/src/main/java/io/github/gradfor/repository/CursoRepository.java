package io.github.gradfor.repository;

import io.github.gradfor.dto.CursoDTO;
import io.github.gradfor.entity.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
    @Override
    List<Curso> findAllById(Iterable<Long> ids);
}
