console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);
const idadeComprador = 21;
const estaAcompanhado = false;
const temPassagemComprada = true;


console.log("Destinos possivéis:");
console.log(listaDeDestinos);

if (idadeComprador >= 19 || estaAcompanhado == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);

} else {
    console.log("Não é maior de Idade não posso vender");

}
console.log("emnbarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);


// .splice(1, 1); // retirar elemento da lista
// .push(1, 1); // retirar elemento da lista