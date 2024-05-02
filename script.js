const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = 'Título da Página';
link.innerText = 'Link Proz Educação';


listaNaoOrdenada.innerHTML = `
  <li>Conteúdo textual 1</li>
  <li>Conteúdo textual 2</li>
  <li>Conteúdo textual 3</li>
`;
listaOrdenada.innerHTML = `
  <li><a href="https://youtube.com/">Link para youtube</a></li>
  <li><a href="https://www.alura.com.br/">Link para Alura</a></li>
  <li><a href="https://www.impacta.edu.br/">Link para Impacta</a></li>
`;