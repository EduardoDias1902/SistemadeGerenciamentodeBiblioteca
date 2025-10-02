const biblioteca = require('./biblioteca');
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

function menu() {
  console.log(`
=== Biblioteca ===
1. Adicionar livro
2. Listar livros
3. Buscar por título
4. Editar livro
5. Alterar disponibilidade
6. Remover livro
0. Sair
`);
  rl.question("Opção: ", op => {
    if (op === "0") return rl.close();

    if (op === "1") {
      rl.question("Título, Autor, Ano, Gênero: ", d => {
        const [t, a, an, g] = d.split(",");
        biblioteca.adicionarLivro(t.trim(), a.trim(), parseInt(an), g.trim());
        return menu();
      });
    }
    if (op === "2") { biblioteca.listarLivros(); return menu(); }
    if (op === "3") rl.question("Título: ", t => { biblioteca.buscarLivro(t); menu(); });
    if (op === "4") rl.question("ID e novos dados (título,autor,ano,gênero): ", d => {
      const [id, t, a, an, g] = d.split(",");
      const dados = {};
      if (t) dados.titulo = t.trim();
      if (a) dados.autor = a.trim();
      if (an) dados.ano = parseInt(an);
      if (g) dados.genero = g.trim();
      biblioteca.editarLivro(parseInt(id), dados);
      menu();
    });
    if (op === "5") rl.question("ID e status (s/n): ", d => {
      const [id, st] = d.split(",");
      biblioteca.alterarDisponibilidade(parseInt(id), st.trim().toLowerCase() === "s");
      menu();
    });
    if (op === "6") rl.question("ID: ", id => { biblioteca.removerLivro(parseInt(id)); menu(); });
    if (!["1","2","3","4","5","6"].includes(op)) { console.log("Opção inválida."); menu(); }
  });
}

menu();
