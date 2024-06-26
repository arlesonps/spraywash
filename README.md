# Sistema de Controle de Gestão da Spray Wash

Este é um sistema de controle de gestão para a Spray Wash, implementado em Node.js com banco de dados SQLite. O sistema permite o cadastro de clientes, estabelecimentos, serviços e produtos, além de operações como lançamento e baixa de comandas, controle de fluxo de caixa e geração de relatórios.

## Funcionalidades

1. **Cadastro**
   - Cadastrar Cliente
   - Cadastrar Estabelecimento
   - Cadastrar Serviço
   - Cadastrar Produto

2. **Operacional**
   - Lançar Comanda/Ordem de Serviço
   - Baixar Comanda/Ordem de Serviço

3. **Financeiro**
   - Controle/Fluxo de Caixa
   - Contas a Pagar (a implementar)
   - Contas a Receber (a implementar)
   - Plano de Contas/Categorias (a implementar)

4. **Relatórios**
   - Relatório de Vendas (a implementar)
   - Relatório de Aniversariantes (a implementar)

## Requisitos

- Node.js
- SQLite3

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/spray-wash-system.git
   cd spray-wash-system

## Estrutura do Código e Funções Principais

index.js: Contém o código principal do sistema, incluindo funções de cadastro, operações operacionais, controle financeiro e geração de relatórios.
Banco de dados SQLite é utilizado para armazenar dados de clientes, estabelecimentos, serviços, produtos, comandas e fluxo de caixa.

**Cadastro**

cadastrarCliente(): Cadastra um novo cliente.
cadastrarEstabelecimento(): Cadastra um novo estabelecimento.
cadastrarServico(): Cadastra um novo serviço.
cadastrarProduto(): Cadastra um novo produto.

**Operacional**

lancarComanda(): Lança uma nova comanda/ordem de serviço.
baixarComanda(): Baixa uma comanda/ordem de serviço existente.
Financeiro
registrarFluxoDeCaixa(): Registra uma entrada ou saída no fluxo de caixa.
Relatórios
relatorioVendas(): Gera um relatório de vendas (a implementar).
relatorioAniversariantes(): Gera um relatório de aniversariantes (a implementar).

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades para este projeto. Para isso, siga os passos abaixo:

Faça um fork deste repositório.
Crie uma branch para a sua feature (git checkout -b feature/nova-feature).
Faça commit das suas alterações (git commit -m 'Adiciona nova feature').
Faça push para a branch (git push origin feature/nova-feature).
Abra um Pull Request.

