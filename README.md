# react-access-hub-typescript

react-access-hub-typescript

## Convertendo o projeto de JS para TypeScript

### `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

### `npx tsc --init`

## Adicionar esta linha de codigo no arquivo tsconfig.json

### `"jsx": "react-jsx",`

### `npm install --save @types/react-bootstrap -D --force`

# React Access Hub (Front-End)

Bem-vindo ao meu projeto! Aqui estão os comandos npm essenciais:

## Funcionalidades

- **Página Inicial:** Apresenta a visão inicial do sistema.
- **Login e Registro:** Páginas dedicadas para autenticação.
- **Roteamento Público e Privado:** Direciona usuários para áreas públicas ou privadas após login.
- **Dashboard:** Área privada do sistema.

## Comandos NPM

### `npm start`

Inicia o aplicativo em modo de desenvolvimento.

### `npm run build`

Cria uma versão otimizada para produção.

## Estrutura do Projeto

A estrutura de pastas e arquivos deste projeto foi inspirada por este [artigo](https://dev.to/telles/tips-estruturando-as-camadas-de-uma-arquitetura-react-36bp) sobre a arquitetura React.

## Bibliotecas usadas

### `npm install react-router-dom`

O react-router-dom facilita a navegação entre as telas do aplicativo, proporcionando uma experiência do usuário mais dinâmica e um fluxo de navegação suave.

### `npm install react-bootstrap bootstrap`

O react-bootstrap integra componentes estilizados do Bootstrap ao React, permitindo o uso fácil e direto de elementos prontos para criar uma interface elegante e responsiva em projetos React, sem a necessidade de manipular classes de estilo do Bootstrap.

Obs: Além do comando de instalação, é necessário adicionar a importação do CSS do React no arquivo `./index.js` do projeto.

`import 'bootstrap/dist/css/bootstrap.min.css'`

### `npm install react-hook-form`

O react-hook-form é uma biblioteca que facilita a criação de formulários no React, oferecendo uma API simples e intuitiva para gerenciar o estado dos campos do formulário.

### `npm install yup`

Yup é uma biblioteca de validação de esquemas JavaScript que permite definir esquemas de validação para objetos JavaScript e validar esses objetos em conformidade com esses esquemas.

### `npm install @hookform/resolvers yup`

Este é um pacote de resolução de esquemas para o react-hook-form, que permite integrar validação baseada em esquemas com bibliotecas como Yup.

### `npm install react-icons --save`

O react-icons é uma biblioteca que fornece um conjunto abrangente de ícones para uso em aplicativos React, permitindo adicionar ícones facilmente em diferentes partes da interface do usuário.

### `npm install json-server`

O json-server é uma biblioteca que permite simular uma API RESTful a partir de um arquivo JSON, facilitando o desenvolvimento e teste de aplicações front-end sem a necessidade de um backend real.

### `npm install axios`

Axios é um cliente HTTP baseado em promessas para o navegador e node.js, que facilita a realização de requisições HTTP para interagir com APIs externas ou o servidor backend.
