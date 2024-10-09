package io.github.gradfor.controller;

import io.github.gradfor.entity.Curso;
import io.github.gradfor.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    // Criar um novo curso
    @PostMapping
    public ResponseEntity<Curso> createCurso(@RequestBody Curso curso) {
        Curso createdCurso = cursoService.save(curso);
        return new ResponseEntity<>(createdCurso, HttpStatus.CREATED);
    }

    // Obter todos os cursos
    @GetMapping
    public ResponseEntity<List<Curso>> getAllCursos() {
        List<Curso> cursos = cursoService.findAll();
        return new ResponseEntity<>(cursos, HttpStatus.OK);
    }

    // Obter um curso por ID
    @GetMapping("/{id}")
    public ResponseEntity<Curso> getCursoById(@PathVariable Long id) {
        Curso curso = cursoService.findById(id);
        return curso != null ? new ResponseEntity<>(curso, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Atualizar um curso
    @PutMapping("/{id}")
    public ResponseEntity<Curso> updateCurso(@PathVariable Long id, @RequestBody Curso curso) {
        Curso updatedCurso = cursoService.update(id, curso);
        return updatedCurso != null ? new ResponseEntity<>(updatedCurso, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Deletar um curso
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCurso(@PathVariable Long id) {
        if (cursoService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
