console.log(`\n Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);
const idadeComprador = 21;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";


console.log("\n Destinos possivéis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 19 || estaAcompanhado == true;
let contador = 0;
let destinoExiste = false;
while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("DestinoExiste:", destinoExiste);
if (podeComprar && destinoExiste) {
    console.log("Boa viagem ");

} else {
    console.log("Desculpe ocorreu um erro! ");

}
for (let i = 0; i < 3; i++) {

    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}