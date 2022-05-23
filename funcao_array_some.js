
//Esse método verifica se pelo menos um item do array passa na regra retornando 'true', mesmo que todos os outros não passem. Se de fato nenhum item passar então ele retorna 'false'. Exemplo: 


const meuArray = [1, 2, 3, 4, 5];

const novoArray = meuArray.some((item) => {
    return item == 2;
});

console.log(novoArray);
//true


//Neste caso a regra é o valor do item ser igual a dois, como o array possui um número 2 então ele retorna 'true' . Se alterarmos a regra para ela buscar um número que seja igual a 6, então, neste caso, ela retornaria 'false', já  que o maior número é o 5.
