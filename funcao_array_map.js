
//Esse método é extremamente útil e provavelmente é o mais usado. Com ele você consegue passar por cada item do seu array e retornar alguma coisa em cada um deles, com isso conseguimos criar um novo array, vamos ver este exemplo:

const meuArray = [1, 2, 3, 4, 5];

const novoArray = meuArray.map((item) => {

    return item * 2;

});

console.log(novoArray);
//saida -> [2 , 4, 6, 8, 10]

//A variavel de nome 'item' que foi declarada ali representa cada valor dentro do array. Na linha 7 retornamos esse valor vezes 2, e como já mencionei, o método .map() cria um novo array usando um outro array e eplicando alguma regra à ele. Neste caso, criamos um novo array que possui todos os valores do anterior multiplicados por 2.

//exemplo:
//função que tira maiculo do array com map
const names = ['jarDel', 'AUGusto', 'Daniel', 'Alberto'];
const nomesTratados = names.map((nomeAtual) => {
    //nomeAtual[0].toUpperCase() ->> pega a primeira letra da palavra e converte para maiusculo
    //nomeAtual.toLowerCase().slice(1) ->> slice pega o valor da palavra depois da primeira letra, passando o numero 1 e o toLowerCase passa para minusculo o resto da palavra
    return nomeAtual[0].toUpperCase() + nomeAtual.toLowerCase().slice(1);
});

console.log(nomesTratados);
