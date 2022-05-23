
//esse método funciona de forma parecida com o .map(), porém ele não retorna nada, ele apenas passa por cada item do array e executa o código interno. Exemplo:

const meuArray = [1, 2, 3, 4, 5];
const novoArray = [];

//const novoArray = meuArray.forEach((item) => {
meuArray.forEach((item) => {
    novoArray.push(item * 2);
});

console.log(novoArray);
//[2, 4, 6, 8, 10]


//Perceba as diferenças em relação ao exemplo anterior, como ele não retorna nada, eu não poderia fazer o código como está na linha 6, se fizesse isso, o console.log() iria imprimir "undefined" que quer dizer vazio. Neste caso eu precisei criar a variável novoArray antes, e usasr o forEarch para adicionar valores a ele, isso para termos o mesmo efeito do .map().
