package io.github.gradfor.service;

import io.github.gradfor.dto.AlunoDTO;
import io.github.gradfor.dto.CursoDTO;
import io.github.gradfor.dto.CursoInfoDTO;
import io.github.gradfor.entity.Aluno;
import io.github.gradfor.entity.Curso;
import io.github.gradfor.repository.AlunoRepository;
import io.github.gradfor.repository.CursoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    @Transactional
    public Aluno criarAluno(AlunoDTO alunoDTO) {
        Aluno aluno = new Aluno();
        aluno.setNome(alunoDTO.getNome());
        aluno.setMatricula(alunoDTO.getMatricula());
        aluno.setCpf(alunoDTO.getCpf());
        aluno.setAtivo(alunoDTO.getAtivo());

        Set<Curso> cursosSet = new HashSet<>(cursoRepository.findAllById(alunoDTO.getCursosIds()));
        aluno.setCursos(cursosSet);

        return alunoRepository.save(aluno);
    }


    public List<AlunoDTO> listarTodosAlunos() {
        List<Aluno> alunos = alunoRepository.findAll();
        return alunos.stream().map(this::converterParaDTO).collect(Collectors.toList());
    }

    public List<AlunoDTO> listarTodos() {
        List<Aluno> alunos = alunoRepository.findAll();
        return alunos.stream()
                .map(this::converterParaDTO)
                .collect(Collectors.toList());
    }


    @Transactional
    public Aluno atualizarAluno(Long id, AlunoDTO alunoDTO) {
        Optional<Aluno> alunoOpt = alunoRepository.findById(id);

        if (alunoOpt.isPresent()) {
            Aluno aluno = alunoOpt.get();
            aluno.setNome(alunoDTO.getNome());
            aluno.setMatricula(alunoDTO.getMatricula());
            aluno.setCpf(alunoDTO.getCpf());
            aluno.setAtivo(alunoDTO.getAtivo());

            // Atualizar os cursos com base nos IDs
            Set<Curso> cursosSet = new HashSet<>(cursoRepository.findAllById(alunoDTO.getCursosIds()));
            aluno.setCursos(cursosSet);

            return alunoRepository.save(aluno);
        } else {
            throw new RuntimeException("Aluno não encontrado");
        }
    }

    @Transactional
    public void deletarAluno(Long id) {
        alunoRepository.deleteById(id);
    }

    private AlunoDTO converterParaDTO(Aluno aluno) {
        AlunoDTO alunoDTO = new AlunoDTO();
        alunoDTO.setId(aluno.getId());
        alunoDTO.setNome(aluno.getNome());
        alunoDTO.setMatricula(aluno.getMatricula());
        alunoDTO.setCpf(aluno.getCpf());
        alunoDTO.setAtivo(aluno.getAtivo());

        List<CursoInfoDTO> cursosDTO = aluno.getCursos().stream()
                .map(curso -> new CursoInfoDTO(curso.getId(), curso.getNome()))
                .collect(Collectors.toList());

        alunoDTO.setCursos(cursosDTO);

        return alunoDTO;
    }


}
