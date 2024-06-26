const readline = require('readline-sync');
const sqlite3 = require('sqlite3').verbose();

// Abrir uma conexão com o banco de dados SQLite
let db = new sqlite3.Database('./sistema.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

// Criar as tabelas se não existirem
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        telefone TEXT,
        email TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS estabelecimentos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        endereco TEXT,
        telefone TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS servicos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        preco REAL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        preco REAL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS comandas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        placaOuNome TEXT,
        servicosSelecionados TEXT,
        estabelecimento TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS fluxoDeCaixa (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo TEXT,
        valor REAL
    )`);
});

// Funções para cadastrar
function cadastrarCliente() {
    const nome = readline.question('Nome do cliente: ');
    const telefone = readline.question('Telefone do cliente: ');
    const email = readline.question('Email do cliente: ');

    db.run(`INSERT INTO clientes (nome, telefone, email) VALUES (?, ?, ?)`, [nome, telefone, email], function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('Cliente cadastrado com sucesso!');
    });
}

function cadastrarEstabelecimento() {
    const nome = readline.question('Nome do estabelecimento: ');
    const endereco = readline.question('Endereço do estabelecimento: ');
    const telefone = readline.question('Telefone do estabelecimento: ');

    db.run(`INSERT INTO estabelecimentos (nome, endereco, telefone) VALUES (?, ?, ?)`, [nome, endereco, telefone], function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('Estabelecimento cadastrado com sucesso!');
    });
}

function cadastrarServico() {
    const nome = readline.question('Nome do serviço: ');
    const preco = parseFloat(readline.question('Preço do serviço: '));

    db.run(`INSERT INTO servicos (nome, preco) VALUES (?, ?)`, [nome, preco], function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('Serviço cadastrado com sucesso!');
    });
}

function cadastrarProduto() {
    const nome = readline.question('Nome do produto: ');
    const preco = parseFloat(readline.question('Preço do produto: '));

    db.run(`INSERT INTO produtos (nome, preco) VALUES (?, ?)`, [nome, preco], function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('Produto cadastrado com sucesso!');
    });
}

// Funções para operações operacionais
function lancarComanda() {
    const placaOuNome = readline.question('Placa ou nome do cliente: ');
    const servicosSelecionados = readline.question('Serviços selecionados (separados por vírgula): ').split(',').join(',');
    const estabelecimento = readline.question('Nome do estabelecimento: ');

    db.run(`INSERT INTO comandas (placaOuNome, servicosSelecionados, estabelecimento) VALUES (?, ?, ?)`, [placaOuNome, servicosSelecionados, estabelecimento], function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('Comanda lançada com sucesso!');
    });
}

function baixarComanda() {
    const placaOuNome = readline.question('Placa ou nome do cliente: ');
    const formaDePagamento = readline.question('Forma de pagamento: ');

    // Encontre a comanda correspondente e faça as operações necessárias

    console.log('Comanda baixada com sucesso!');
}

// Funções financeiras
function registrarFluxoDeCaixa() {
    const tipo = readline.question('Tipo (Entrada/Saída): ');
    const valor = parseFloat(readline.question('Valor: '));

    db.run(`INSERT INTO fluxoDeCaixa (tipo, valor) VALUES (?, ?)`, [tipo, valor], function(err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('Registro de fluxo de caixa feito com sucesso!');
    });
}

// Funções de relatórios
function relatorioVendas() {
    // Gerar relatório de vendas
}

function relatorioAniversariantes() {
    // Gerar relatório de aniversariantes
}

// Loop principal
function main() {
    console.log('=== Sistema de Controle de Gestão da Spray Wash ===');
    console.log('1. Cadastro');
    console.log('2. Operacional');
    console.log('3. Financeiro');
    console.log('4. Relatórios');
    console.log('0. Sair');

    const opcao = readline.question('Escolha uma opção: ');

    switch(opcao) {
        case '1':
            console.log('=== Menu Cadastro ===');
            console.log('1. Cadastrar Cliente');
            console.log('2. Cadastrar Estabelecimento');
            console.log('3. Cadastrar Serviço');
            console.log('4. Cadastrar Produto');
            console.log('0. Voltar');
            
            const cadastroOpcao = readline.question('Escolha uma opção: ');

            switch(cadastroOpcao) {
                case '1':
                    cadastrarCliente();
                    break;
                case '2':
                    cadastrarEstabelecimento();
                    break;
                case '3':
                    cadastrarServico();
                    break;
                case '4':
                    cadastrarProduto();
                    break;
                case '0':
                    break;
                default:
                    console.log('Opção inválida!');
            }
            break;

        case '2':
            console.log('=== Menu Operacional ===');
            console.log('1. Lançar Comanda/Ordem de Serviço');
            console.log('2. Baixar Comanda/Ordem de Serviço');
            console.log('0. Voltar');
            
            const operacionalOpcao = readline.question('Escolha uma opção: ');

            switch(operacionalOpcao) {
                case '1':
                    lancarComanda();
                    break;
                case '2':
                    baixarComanda();
                    break;
                case '0':
                    break;
                default:
                    console.log('Opção inválida!');
            }
            break;

        case '3':
            console.log('=== Menu Financeiro ===');
            console.log('1. Controle/Fluxo de Caixa');
            console.log('2. Contas a Pagar');
            console.log('3. Contas a Receber');
            console.log('4. Plano de Contas/Categorias');
            console.log('0. Voltar');
            
            const financeiroOpcao = readline.question('Escolha uma opção: ');

            switch(financeiroOpcao) {
                case '1':
                    registrarFluxoDeCaixa();
                    break;
                case '2':
                    // Implementar contas a pagar
                    break;
                case '3':
                    // Implementar contas a receber
                    break;
                case '4':
                    // Implementar plano de contas/categorias
                    break;
                case '0':
                    break;
                default:
                    console.log('Opção inválida!');
            }
            break;

        case '4':
            console.log('=== Menu Relatórios ===');
            console.log('1. Relatório de Vendas');
            console.log('2. Relatório de Aniversariantes');
            console.log('0. Voltar');
            
            const relatoriosOpcao = readline.question('Escolha uma opção: ');

            switch(relatoriosOpcao) {
                case '1':
                    relatorioVendas();
                    break;
                case '2':
                    relatorioAniversariantes();
                    break;
                case '0':
                    break;
                default:
                    console.log('Opção inválida!');
            }
            break;

        case '0':
            console.log('Saindo do sistema...');
            db.close((err) => {
                if (err) {
                    console.error(err.message);
                }
                console.log('Fechando a conexão com o banco de dados.');
            });
            return;

        default:
            console.log('Opção inválida!');
    }

    main(); // Chama recursivamente para continuar o loop
}

// Inicia o loop principal
main();
