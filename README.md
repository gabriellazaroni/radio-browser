# Projeto de Rádio - Descrição Técnica

## Visão Geral

- Este projeto foi desenvolvido para fornecer uma experiência moderna e gestão de rádios online, permitindo que os usuários pesquisem, escutem e favoritem suas estações preferidas. O desenvolvimento foi realizado com React, TypeScript e Vite, garantindo robustez e escalabilidade.

## Tecnologias Utilizadas

## Frontend

- **React**: Biblioteca principal para construção da interface.

- **TypeScript**: Utilizado para tipagem estática, aumentando a segurança do código.

- **Styled-Components**: Para estilização dos componentes de forma modular e dinâmica.

- **React Hooks**: Uso intensivo de useState, useEffect e useContext para gerenciamento de estado.

## Gerenciamento de Estado e Dados

- **useState**: Para manipulação de estados locais, como listas de rádios e favoritos.

- **useEffect**: Para requisições de API e monitoramento de eventos.

- **LocalStorage**: Armazena os favoritos e mantém a persistência dos dados do usuário.

## API e Integração

- **Axios**: Utilizado para realizar chamadas HTTP à API de rádios.

## Componentização e Organização

- **Componentes Reutilizáveis**: Criados para garantir modularidade e reaproveitamento de código, incluindo botões, inputs, modal, sidebar, cards, menu.

## Funcionalidades

- **Pesquisa** de Rádios: Usuários podem pesquisar rádios por nome.

- **Favoritos**: Possibilidade de adicionar rádios à lista de favoritos, armazenando no LocalStorage.

- **Player de Áudio**: Usuários podem tocar e pausar rádios em tempo real.

- **Suporte a Mobile**: Interface responsiva com menu lateral adaptado para mobile.

- **Filtragem de Favoritos**: Pesquisa dinâmica dentro da lista de favoritos.

- **Exclusão de Favoritos**: Opção de remover rádios individuais ou limpar toda a lista.

## Melhorias Futuras

Autenticação de Usuário: Para que favoritos sejam armazenados em um banco de dados.

Integração com API de Geolocalização: Para sugerir rádios locais ao usuário.

## Como Rodar o Projeto

Clone o repositório:

   ```bash
   git clone <https://github.com/gabriellazaroni/fullcalendar-js.git>

   ```

Acesse a pasta do projeto:

  ```bash
  cd nome-do-projeto
  ```

Instale as dependências:

  ```bash 
    npm install
  ```

Inicie o servidor de desenvolvimento:

  ```bash
  npm run dev
  ```

Para testes:

```bash
npm test
```

## Considerações Finais

Este projeto foi desenvolvido aplicando boas práticas de código, componentização eficiente e gerenciamento de estado adequado. O uso de styled-components permitiu estilização modular, enquanto React e TypeScript garantiram um desenvolvimento mais seguro e escalável.

Algumas rádios nao carregam o audio, e na pagina 2 duas rádios chinesas estao vindo sem nome do backend.

