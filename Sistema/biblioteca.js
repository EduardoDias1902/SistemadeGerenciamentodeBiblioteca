let catalogo = [];
let idAtual = 1;

function adicionarLivro(titulo, autor, ano, genero) {
  if (catalogo.some(l => l.titulo.toLowerCase() === titulo.toLowerCase())) {
    return console.log(` O livro "${titulo}" já existe.`);
  }
  catalogo.push({ id: idAtual++, titulo, autor, ano, genero, disponivel: true });
  console.log(`Livro "${titulo}" adicionado!`);
}

function listarLivros() {
  if (!catalogo.length) return console.log("Nenhum livro cadastrado.");
  catalogo.forEach(l =>
    console.log(`${l.id} - ${l.titulo} | ${l.autor} | ${l.ano} | ${l.genero} | ${l.disponivel ? "Disponível" : "Emprestado"}`)
  );
}

function buscarLivro(titulo) {
  const livro = catalogo.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
  console.log(livro ? `Encontrado: ${livro.titulo} (${livro.autor})` : ` Não encontrado.`);
}

function editarLivro(id, dados) {
  const livro = catalogo.find(l => l.id === id);
  if (!livro) return console.log(` ID ${id} não encontrado.`);
  Object.assign(livro, dados);
  console.log(`Livro ${id} atualizado!`);
}

function alterarDisponibilidade(id, disponivel) {
  const livro = catalogo.find(l => l.id === id);
  if (!livro) return console.log(`ID ${id} não encontrado.`);
  livro.disponivel = disponivel;
  console.log(`${livro.titulo} agora está ${disponivel ? "Disponível" : "Emprestado"}`);
}

function removerLivro(id) {
  const i = catalogo.findIndex(l => l.id === id);
  if (i < 0) return console.log(`ID ${id} não encontrado.`);
  console.log(`Livro "${catalogo[i].titulo}" removido.`);
  catalogo.splice(i, 1);
}

module.exports = { adicionarLivro, listarLivros, buscarLivro, editarLivro, alterarDisponibilidade, removerLivro };
