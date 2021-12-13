# InterWeek

InterWeek e um bootcamp feito pelas empresas  [Banco Inter](https://www.bancointer.com.br) e [DIO](https://www.bancointer.com.br), com o objetivo de aprofundar os conhecimentos e incentivar a programação de sites e servidores.

## Tecnologias que foram usadas nesse projeto:
<div style="display: inline_block"><br>
  <img align="center" alt="ts" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img align="center" alt="insomnia" src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE">
  <img align="center" alt="npm" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white">
  <img align="center" alt="yarn" src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white">
  <img align="center" alt="git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
  <img align="center" alt="node" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
  <img align="center" alt="github" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
  <img align="center" alt="express" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
  <img align="center" alt="postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">                                                                                                                                   
</div>

## Sobre:
<p>O projeto e uma api para fazer buscas e atualizações de dados na database, todas as keys de acesso e pagamento são codificadas assim trazendo segurança no uso da api e aos usuarios logados no banco.</p>

## Testando a api:
clique [aqui](https://www.youtube.com/embed/vJyJPSy4JYU) para visualizar o teste da api no youtube.
<div>
<!-- <iframe width="200" height="200" src="https://www.youtube.com/embed/vJyJPSy4JYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> !-->
</div>

## Rotas do projeto:

|   Rota             |  Metodo |                         Descrição                                       |
|--------------------|---------|-------------------------------------------------------------------------| 
|  user/signin       |   post  |  Caso autorizado, retorna um token para login.                          |
|  user/signup       |   post  |  Retorna um token apos cadastro do usuario.                             |
|  user/me           |   get   |  Busca na database informações sobre o usuario.                         |
|  pix/request       |   post  |  Faz solicitação  de um valor pix, caso autorizado retorna ua key.      |
|  pix/transactions  |   get   |  Retorna ultimas transações  do usuario.                                |
|  pix/pay           |   post  |  Faz um pagamento para uma chave antes gerada com request.              |
  
  
  
## Preparação do ambiente:
<div>
<p><strong>1º</strong> - Faça download do <a href="https://code.visualstudio.com/docs/?dv=w">Visual Studio</a> e abra-o em seguida.</p>
<p><strong>2º</strong> - Com o visual studio aberto baixe as seguintes extenções "EditorConfig for VS Code" e "Prettier - Code formatter".</p>
<p><strong>3º</strong> - Baixe e faça login no programa <a href="https://www.docker.com/products/docker-desktop">Docker</a>.</p>
<p><strong>4º</strong> - Instale o programa <a href="https://nodejs.org/en/download/">Node.js</a>.</p>
<p><strong>5º</strong> - Instale o programa <a href="https://git-scm.com/downloads">Git scm</a>.</p
<p><strong>6º</strong> - Apos criar uma pasta abra ela no editor e em seguida abra o terminal.</p
<p><strong7>7º</strong> - Use os comandos abaixo em seu terminal.</p
</div>
  
 ## Comandos:
  
 ```javascript
 $ git init 
 $ git clone https://github.com/DARKnx/inter-clone-backend.git
 $ git add -A
 $ git commit -am "Primeiro commit."
 $ npm i
 $ yarn add Express typescript -D ts-node -D @types/express -D @types/node -D nodemon -D
 $ docker-compose up -d
 $ yarn start:dev
  ```
  

### Creditos:
 Creditos ao professor [@pablohdev](https://github.com/pablohdev) que idealizou o projeto e deu todo suporte e atenção na criação do projeto.

  
### Contato:
<div style="display: inline_block"><br>
<a href="https://discord.gg/mzYPWSP2e9"><img src="https://img.shields.io/badge/servidor-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white"></a>
<a href="mailto:joao.vitornl@gmail.com?subject=Ola tudo bem ? Tenho interesse em seus serviços!"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
<a href="https://linkedin.com/in/joão-vitor-750726224/"><img   src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
<!-- linkedin analisando documentos !-->  
<a href="https://api.whatsapp.com/send?phone=+5531997100959&text=ola%20tudo%20bem%20?%20tenho%20interesse%20em%20seus%20serviços!"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"> </a>
<a href="https://www.instagram.com/darknx.br/"><img src="https://img.shields.io/badge/instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white"> </a>           </div>

  
  ```Copyright © 2021 DARKnx```
  
