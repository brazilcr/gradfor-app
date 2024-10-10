<a id="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <h3 align="center">Gradfor-Desafio Desenvolvedor</h3>

  <p align="center">
    Aplicação web responsiva para administrar alunos, professores e cursos.
    <br />
    <a href="https://github.com/brazilcr/gradfor-app"><strong>Explore o projeto »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/brazilcr/gradfor-app">Ver Demo</a>
    · -->
    <a href="https://github.com/brazilcr/gradfor-app/issues/new?labels=bug&template=bug-report---.md">Reportar Bugs</a>
    ·
    <a href="https://github.com/brazilcr/gradfor-app/issues/new?labels=enhancement&template=feature-request---.md">Solicitar Features</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Desafio</a>
      <ul>
        <li><a href="#built-with">Feito com</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Iniciando</a>
      <ul>
        <li><a href="#prerequisites">Prerequisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contribuição</a></li>
    <li><a href="#license">Licensa</a></li>
    <li><a href="#contact">Contato</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o Desafio

![gradfor_base](https://github.com/user-attachments/assets/c1ae3e21-c80b-4492-bfef-cec6b9849f2d)

Desenvolver uma aplicação web responsiva para administrar alunos, professores e cursos. Soluções parciais serão aceitas.


- [x] Visão de administrador
- [ ] Incluir, excluir, atualizar e visualizar usuários.
- [x] Visão de coordenador de cursos
- [ ] Incluir, excluir, atualizar e visualizar os semestres, cursos e disciplinas;
- [ ] Realizar a montagem da matriz curricular.
- [x] Visão de professor e aluno
- [ ] Visualizar a matriz curricular.

## Escopo do desafio

Em arquivo PDF a solicitação enviada por whatsapp foi:
- [x] Desenvolver os módulos de frontend e backend (API Rest) de forma separada.
- [x] desenvolvimento do backend deve ser feito em linguagem Java utilizando o
framework Quarkus.
- [x] A aplicação backend e frontend devem ser seguras, implementando políticas de
acesso gerenciadas pelo keycloak.
- [x] O desenvolvimento do frontend deve utilizar o Angular 15+ (standalone).
- [x] O banco de dados pode ser qualquer banco relacional, exemplo (mysql, postgres,
etc.)
- [ ] O desenvolvimento deve utilizar como padrão o docker e docker-compose para
orquestrar a aplicação.

## Observações do desenvolvedor

Atividades em demasia numa única sprint de 5 dias, me fez focar naquilo de mais necessário para o processo de avaliação do RH. Nisso, todas atividades entendidas como redundância da exposição de conhecimento com as ferramentas não foram feitas.

No aplicativo frontend, encontramos completo CRUD da entidade ALUNOS. Então, o desenvolvimento de professores e cursos foram desconsideradas. Importante ressaltar que validações de campos na interface de UX não foram consideradas.

No backend, a API contempla todas operações para a entidade ALUNO. Então para entidades CURSO contemplamos alguns endpoints e a estruturação daquilo que mostra uma típica relação _'ManyToMany'_.

Em relação as políticas de acesso gerenciadas pelo keycloak, o sistema contempla plena integração com essa atividade. Pela sprint curta, todas as operações CRUD com usuários não foram implementadas.

Em relação as políticas de acesso no backend foi realizado o desenvolvimento da política do token com chave secreta.

Para conveniência do teste de funcionalidade, anexo o arquivo 'realm-export.json' com as mesmas funcionalidades do Ream/Keycloak em ambiente de desenvolvimento.

A baixa disponibilidade de espaço no pc pessoal de desenvolvimento não permitiu a criação de um docker file para criação de imagem docker.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>



### Desafio Utilizou


 [![Java][java]][java-url]<br />[![Quarkus][quarkus]][quarkus-url]   [![Spring][spring]][spring-url]    [![Jpa][jpa]][jpa-url]   [![Keycloak][keycloak]][keycloak-url]<br />
 [![Angular][Angular.io]][Angular-url]<br />
 [![Material][material]][angularmaterial-url]   [![TypeScript][typescript]][typescript-url]<br />[![Node][node]][nodejs-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Para testadores

Recomendável a utilização das versões.

### Pré requisitos

Ambiente de desenvolvimento
* Java
  ```sh
  java version "17.0.12" 2024-07-16 LTS
  Java(TM) SE Runtime Environment (build 17.0.12+8-LTS-286)
  Java HotSpot(TM) 64-Bit Server VM (build 17.0.12+8-LTS-286, mixed mode, sharing)
  ```
* Node
  ```sh
  v20.16.0
  ```
 * Angular
  ```sh
  Angular CLI: 18.2.0
  Package Manager: npm 10.8.1
  OS: win32 x64
    Angular:
    Package                      Version
    ------------------------------------------------------
    @angular-devkit/architect    0.1802.0 (cli-only)
    @angular-devkit/core         18.2.0 (cli-only)
    @angular-devkit/schematics   18.2.0 (cli-only)
    @schematics/angular          18.2.0 (cli-only)
  ``` 

### Testar

_Instale via docker o keycloak, rode o aplicativo Java/Spring,  execute o frontend em Angular._

1. Docker para instalar o Keycloak
   ```sh
   docker run -p 8081:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:18.0.0 start-dev
   ```
2. Instalar pacotes NPM (pasta frontend)
   ```sh
   npm install
   ```
3. Execute o aplicativo Spring
4. Execute o frontend
   ```sh
   ng serve
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Uso

Resultados de teste de funcionalidade em ambiente de desenvolvimento. Seguindo ciclo completo das funcionalidades da solução. No cabeçalho perceba o usuário logado e seus papeis de usuário delegados.


| (1) Ao acessar endpoint http://localhost:4200, redirecionamento para login | (1.1) Papeis cadastrados no keycloak para usuário | (2) após logar-se, sistema vai para listagem de alunos   |
| :-----: | :---: | :---: |
| ![gradfor_001](https://github.com/user-attachments/assets/3fd03606-e9dc-4bbd-9f8e-98a495f49b58)  | ![gradfor_001 a8](https://github.com/user-attachments/assets/0a5dc13b-3e5b-454c-8bbd-eb3b488b67fc)   | ![gradfor_002](https://github.com/user-attachments/assets/c78574ec-a470-4e50-a58f-d67400d3c815)   |

| (3) Após clicar incluir aluno  | (4) _'ALuno Hipotético 55'_ é criado | (5) Agora editado o nome para simplesmente _'Aluno 55'_    |
| :-----: | :---: | :---: |
| ![gradfor_003](https://github.com/user-attachments/assets/ccb085af-5407-4457-b2ee-ade66a633af1) | ![gradfor_004](https://github.com/user-attachments/assets/51f4a742-baf9-4809-9596-a88a4cbf6a22)   | ![gradfor_005](https://github.com/user-attachments/assets/509bd81a-cb50-4ba9-a112-57111c8810c0)   |

| (6) Atribuído os cursos _'Curso Hipotético 2'_ e _'Curso Hipotético 3'_ ao _'Aluno 55'_ | (7) Checando os detalhes do _'Aluno 55'_    | (8) Ao clicar botão _'Admin'_ no cabeçalho, área isolada para operações admin |
| :-----: | :---: | :---: |
| ![gradfor_006](https://github.com/user-attachments/assets/c9e19530-8b58-41b8-98be-333a03263d78) | ![gradfor_007](https://github.com/user-attachments/assets/3b02d3d0-eb19-469c-b00a-b0bc89cdf3de)  | ![gradfor_008](https://github.com/user-attachments/assets/7a1d9e8e-c472-42fb-82ad-ac364091f50b)   |

| (9) Lista de Alunos ao clicar _'Excluir'_ no aluno _'Aluno de todos'_ | (10) Listagem após operação de exclusão do _'Aluno de todos'_  | (11) Demonstração da funcionalidade responsiva das telas construídas com Angular / Material    |
| :-----: | :---: | :---: |
| ![gradfor_009](https://github.com/user-attachments/assets/d0178a62-3d15-4e2e-8d2b-ad544dfb7dd8) | ![gradfor_010](https://github.com/user-attachments/assets/c96211c1-06b7-4a44-a8ab-15c09186a4cb)   | ![gradfor_011](https://github.com/user-attachments/assets/4a316bdf-aa3d-427b-be5c-6032b23eabf4)   |







<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap Versão 1

- [x] Instalado ambiente Java, Spring, Quarkus. Jpa, Hibernate
- [x] Criado endpoints bases da API
- [x] Instalado Keycloak
- [x] Verificado e ajustado versões de compatibilidade entre keycloak e Java
- [x] Teste Postman para o token
    - [x] CRUD de alunos testado
    - [x] CRUD de cursos testadp
     
## Roadmap Versão 2
- [x] Instalado ambiente Angular
- [x] Instalado material angular 
- [X] Criação dos módulos
- [x] Criação dos components
- [x] Testes de consumo da API

## Roadmap Versão 3
- [x] Desenvolvimento da integração do angular com keycloak
- [x] Desenvolvimento da captação dos _'roles'_ pelo angular 
- [x] Funcionalidade da segurança 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contato

Cláudio Baima - [@your_linkedin]https://www.linkedin.com/in/baima/ - baimaclaudio@gmail.com

Link do Projeto : [https://github.com/brazilcr/gradfor-app](https://github.com/brazilcr/gradfor-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Outros Recuros Utilizados

Créditos para outros recursos importantes utilizados:

* [MySql - Banco de Dados](https://www.mysql.com/)
* [ChatGPT - Suporte de configuração do ambiente e compatibilização das versões](https://chatgpt.com/)
* [Maven Repo - Auxílio de compatibilidade entre artefatos Java / Maven](https://mvnrepository.com/)
* [Postman - Teste dos endpoints da API](https://www.postman.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/baima
[nodejs-url]: https://nodejs.org/pt
[product-screenshot]: images/screenshot.png
[java]: https://img.shields.io/badge/java-000000?style=for-the-badge&logo=java&logoColor=white
[quarkus]: https://img.shields.io/badge/quarkus-4d98eb?style=for-the-badge&logo=qurkus&logoColor=white
[keycloak]: https://img.shields.io/badge/keycloak-000000?style=for-the-badge&logo=keycloak&logoColor=white
[material]: https://img.shields.io/badge/angular%20material-fb9008?style=for-the-badge&logo=angularmaterial&logoColor=white
[typescript]: https://img.shields.io/badge/typescript-0b7ece?style=for-the-badge&logo=typescript&logoColor=white
[node]: https://img.shields.io/badge/Node-20-blue?style=for-the-badge&logo=nodejs&logoColor=white
[spring]: https://img.shields.io/badge/Spring-3.0.4-black?style=for-the-badge&logo=spring&logoColor=white
[jpa]: https://img.shields.io/badge/Jpa%20/%20Hibernate-8-bfb07d?style=for-the-badge&logo=jpa&logoColor=gray
[jpa-url]: https://hibernate.org/orm/
[spring-url]: https://spring.io/
[React-url]: https://reactjs.org/
[typescript-url]: https://www.typescriptlang.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-18-blue?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[keycloak-url]: https://www.keycloak.org/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[quarkus-url]: https://pt.quarkus.io/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[java-url]: https://www.java.com/pt-BR/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[angularmaterial-url]: https://material.angular.io/
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
