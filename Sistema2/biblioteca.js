// biblioteca.js

let livros = [];
let idCounter = 1;

// Adicionar Livro
function adicionarLivro(titulo, autor, ano, genero) {
    const livro = {
        id: idCounter++,
        titulo,
        autor,
        ano,
        genero,
        disponivel: true
    };
    livros.push(livro);
    return livro;
}
function listarLivros() {
    return livros;
}

function buscarLivroPorTitulo(titulo) {
    return livros.filter(l => l.titulo.toLowerCase() === titulo.toLowerCase());
}

function editarLivro(id, novosDados) {
    const livro = livros.find(l => l.id === id);
    if (livro) {
        Object.assign(livro, novosDados);
        return true;
    }
    return false;
}
function alterarDisponibilidade(id, status) {
    const livro = livros.find(l => l.id === id);
    if (livro) {
        livro.disponivel = status;
        return true;
    }
    return false;
}

function removerLivro(id) {
    const index = livros.findIndex(l => l.id === id);
    if (index !== -1) {
        livros.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = {
    adicionarLivro,
    listarLivros,
    buscarLivroPorTitulo,
    editarLivro,
    alterarDisponibilidade,
    removerLivro
};
