package io.github.gradfor.controller;

import io.github.gradfor.dto.AlunoDTO;
import io.github.gradfor.entity.Aluno;
import io.github.gradfor.service.AlunoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {

    private final AlunoService alunoService;

    public AlunoController(AlunoService alunoService) {
        this.alunoService = alunoService;
    }

    // consulta por ID
    @GetMapping("/ver/{id}")
    public ResponseEntity<AlunoDTO> getAlunoById(@PathVariable Long id) {
        Aluno aluno = alunoService.findById(id);
        if (aluno == null) {
            return ResponseEntity.notFound().build();
        }

        AlunoDTO alunoDTO = alunoService.converterParaDTO(aluno);
        // Verifique se cursosIds está vazio ou nulo
        if (alunoDTO.getCursosIds() == null) {
            alunoDTO.setCursosIds(new ArrayList<>()); // Inicializa com uma lista vazia
        }

        return ResponseEntity.ok(alunoDTO);
    }


    @PostMapping
    public ResponseEntity<AlunoDTO> criarAluno(@RequestBody AlunoDTO alunoDTO) {
        Aluno alunoCriado = alunoService.criarAluno(alunoDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(new AlunoDTO(alunoCriado));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AlunoDTO> atualizarAluno(@PathVariable Long id, @RequestBody AlunoDTO alunoDTO) {
        Aluno alunoAtualizado = alunoService.atualizarAluno(id, alunoDTO);
        return ResponseEntity.ok(new AlunoDTO(alunoAtualizado));
    }

    @GetMapping
    public ResponseEntity<List<AlunoDTO>> listarTodos() {
        List<AlunoDTO> alunos = alunoService.listarTodos();
        return ResponseEntity.ok(alunos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarAluno(@PathVariable Long id) {
        alunoService.deletarAluno(id);
        return ResponseEntity.noContent().build();
    }
}
