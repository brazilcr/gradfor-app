package io.github.gradfor.service;

import io.github.gradfor.dto.CursoSimplesDTO;
import io.github.gradfor.entity.Curso;
import io.github.gradfor.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    // Salvar um novo curso
    public Curso save(Curso curso) {
        return cursoRepository.save(curso);
    }

    // Buscar todos os cursos
    public List<Curso> findAll() {
        return cursoRepository.findAll();
    }

    public List<Curso> listarCursos() {
        return cursoRepository.findAll();
    }
    public List<CursoSimplesDTO> listarCursosSimples() {
        List<Curso> cursos = cursoRepository.findAll();
        return cursos.stream()
                .map(curso -> new CursoSimplesDTO(curso.getId(), curso.getNome()))
                .collect(Collectors.toList());
    }

    // Buscar um curso por ID
    public Curso findById(Long id) {
        Optional<Curso> curso = cursoRepository.findById(id);
        return curso.orElse(null);
    }

    // Atualizar um curso
    public Curso update(Long id, Curso curso) {
        if (cursoRepository.existsById(id)) {
            curso.setId(id);
            return cursoRepository.save(curso);
        }
        return null; // Retorna null se o curso não existir
    }

    // Deletar um curso
    public boolean delete(Long id) {
        if (cursoRepository.existsById(id)) {
            cursoRepository.deleteById(id);
            return true;
        }
        return false; // Retorna false se o curso não existir
    }
    public Curso criarCurso(Curso curso) {
        return cursoRepository.save(curso);
    }
    public Curso editarCurso(Long id, Curso curso) {
        curso.setId(id);
        return cursoRepository.save(curso);
    }

    public void deletarCurso(Long id) {
        cursoRepository.deleteById(id);
    }
}
