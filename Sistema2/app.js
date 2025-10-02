// app.js
const readline = require("readline");
const biblioteca = require("./biblioteca");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n=== Sistema de Gerenciamento de Biblioteca ===");
    console.log("1 - Adicionar Livro");
    console.log("2 - Listar Livros");
    console.log("3 - Buscar Livro por Título");
    console.log("4 - Editar Livro");
    console.log("5 - Alterar Disponibilidade");
    console.log("6 - Remover Livro");
    console.log("0 - Sair");
    rl.question("Escolha uma opção: ", opcao => {
        switch (opcao) {
            case "1":
                rl.question("Título: ", titulo => {
                    rl.question("Autor: ", autor => {
                        rl.question("Ano: ", ano => {
                            rl.question("Gênero: ", genero => {
                                biblioteca.adicionarLivro(titulo, autor, ano, genero);
                                console.log("Livro adicionado com sucesso!");
                                menu();
                            });
                        });
                    });
                });
                break;
            case "2":
                console.log("\n Catálogo de Livros:");
                console.table(biblioteca.listarLivros());
                menu();
                break;
            case "3":
                rl.question("Digite o título do livro: ", titulo => {
                    const resultado = biblioteca.buscarLivroPorTitulo(titulo);
                    console.table(resultado);
                    menu();
                });
                break;
            case "4":
                rl.question("Digite o ID do livro para editar: ", id => {
                    rl.question("Novo Título: ", titulo => {
                        rl.question("Novo Autor: ", autor => {
                            rl.question("Novo Ano: ", ano => {
                                rl.question("Novo Gênero: ", genero => {
                                    const sucesso = biblioteca.editarLivro(parseInt(id), { titulo, autor, ano, genero });
                                    console.log(sucesso ? "Livro atualizado!" : "Livro não encontrado.");
                                    menu();
                                });
                            });
                        });
                    });
                });
                break;
            case "5":
                rl.question("Digite o ID do livro: ", id => {
                    rl.question("Disponível? (s/n): ", resp => {
                        const status = resp.toLowerCase() === "s";
                        const sucesso = biblioteca.alterarDisponibilidade(parseInt(id), status);
                        console.log(sucesso ? "Disponibilidade atualizada!" : "Livro não encontrado.");
                        menu();
                    });
                });
                break;
            case "6":
                rl.question("Digite o ID do livro para remover: ", id => {
                    const sucesso = biblioteca.removerLivro(parseInt(id));
                    console.log(sucesso ? "Livro removido!" : "Livro não encontrado.");
                    menu();
                });
                break;
            case "0":
                console.log("Encerrando o sistema...");
                rl.close();
                break;
            default:
                console.log("Opção inválida.");
                menu();
                break;
        }
    });
}

menu();
