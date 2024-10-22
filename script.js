// Captura o formulário e a tabela
const formulario = document.getElementById('formulario');
const tabelaUsuarios = document.querySelector('#tabela-usuarios tbody');

// Função para adicionar o cadastro na tabela
function adicionarUsuario(nome, email) {
  const linha = document.createElement('tr');

  const celulaNome = document.createElement('td');
  celulaNome.textContent = nome;

  const celulaEmail = document.createElement('td');
  celulaEmail.textContent = email;

  linha.appendChild(celulaNome);
  linha.appendChild(celulaEmail);

  tabelaUsuarios.appendChild(linha);
}

// Captura o evento de submit do formulário
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

  // Captura os valores dos campos de entrada
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  // Adiciona os dados na tabela
  adicionarUsuario(nome, email);

  // Limpa o formulário
  formulario.reset();
});