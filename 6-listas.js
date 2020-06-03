console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
listaDeDestinos.push(`Curitiba`); //incluir elemento da lista
console.log("Destinos possivéis:");
console.log(listaDeDestinos);
listaDeDestinos.splice(2, 1); // retirar elemento da lista
console.log(listaDeDestinos[2]);