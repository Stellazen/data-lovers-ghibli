import { ordenar } from './data.js';

import data from './data/ghibli/ghibli.js';

const arrayGhibli = data;
const filmes = arrayGhibli["films"]
const root = document.getElementById("root");
let posteres = ''

filmes.map(function(item) {
  posteres += `<img src="${item.poster}">`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
})
root.innerHTML = posteres  // avisa o JS que isso vai pro HTML

const seletorDeOrdem = document.getElementById("ordem")
seletorDeOrdem.addEventListener('change', function(event){
  const posteresOrdenados = ordenar(event.target.value)

  root.innerHTML = posteresOrdenados
})
