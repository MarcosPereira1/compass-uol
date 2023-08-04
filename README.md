# Cadastro de Usuários - Desafio Técnico

Este repositório contém a solução para o desafio técnico de cadastro de usuários, onde o objetivo é garantir o correto funcionamento do fluxo de cadastro de usuários nas operações Aesop Brasil e Natura Brasil. A solução foi implementada utilizando o framework de testes end-to-end Cypress.

## Cenário

O cenário em que o teste foi implementado é o cadastro de usuário preenchendo todos os campos obrigatórios.

## Resultado Esperado

Espera-se que o cadastro do usuário seja concluído com sucesso e que os dados do usuário sejam salvos corretamente no sistema.

Assista à demonstração completa clicando no vídeo abaixo:



https://github.com/MarcosPereira1/compass-uol/assets/100098827/c1bd6d4f-b1ab-4436-b7cb-01091432a371



## Massa de Dados

Para a realização dos testes, foram gerados dados aleatórios de acordo com as informações necessárias para o cadastro de usuário. Foram utilizadas as seguintes bibliotecas:

- `@faker-js/faker` para a geração de dados fictícios, como nome, e-mail e número de telefone.
- `gerador-validador-cpf` para a geração de números de CPF válidos.

## Extra

Além de cumprir os requisitos do desafio, foram adicionados alguns recursos extras para melhorar a qualidade e a eficiência do projeto:

### Configuração do ESLint

Foi implementada a configuração do ESLint para garantir a consistência e a padronização do código. O ESLint ajuda a identificar problemas no código durante o desenvolvimento, como erros de sintaxe, práticas desaconselhadas e outros problemas potenciais. A configuração do ESLint pode ser encontrada no arquivo `.eslintrc.js`.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter o Node.js instalado em sua máquina. Caso contrário, você pode baixá-lo [aqui](https://nodejs.org/).

# Instalação

Faça o git clone deste projeto,
Execute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

## Testes

Como executar os testes com Cypress ? 

### Modo headless

no terminal, execute o comando `npm test`


### Modo interativo

no terminal, execute o comando `npm cypress open`

Made with ❤️ by [Marcos Pereira](https://github.com/MarcosPereira1).

