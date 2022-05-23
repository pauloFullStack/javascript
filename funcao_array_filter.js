
//esse metodo permite fitrar os valores de dentro do array de acordo com uma regra e retorna um novo array
//com valores que não foram filtrados. Exemplo:

const meuArray = [1, 2, 3, 4, 5];

const novoArray = meuArray.filter((item) => {

    return item > 2;

});

console.log(novoArray);
//[3, 4, 5]

//Na linha 8, o return não devolve um valor e sim uma verificação que é usada para decidir se aquele valor
//será filtrado ou não. Neste caso a regra é: se o item for maior que 2, então ele irá retornar "true"
//e não será filtrado, todos que forem menores ou iguais a 2 serão cortados e não farão parte do novo array.
