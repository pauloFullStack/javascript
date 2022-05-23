
//Esse método verifica se o valor passado existe dentro do array, se existir retorna 'true', se não, retorna 'false'. Veja o exemplo:

const meuArray = [1, 2, 3, 4, 5];

const novoArray = meuArray.includes(3);

console.log(novoArray);
//true

//Neste caso, como estamos procurando pelo número 3, e ele existe dentro do array, então o retorno foi 'true'. se procurássemos pelo número 6, ele não seria encontado, logo retornaria 'false'