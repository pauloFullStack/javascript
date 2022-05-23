
//Esse método faz uma busca no seu array para encontrar e retornar o primeiro item na regra que você programar Exemplo:

const meuArray = [1, 2, 3, 4, 5];

const novoArray = meuArray.find((item) => {

    return item > 3;

});

console.log(novoArray);
//4

//Neste caso usamos a mesma regra, queremos encontrar o primeiro item que for maior que 2, que neste caso é o 3. Perceba que ele retornou apenas o primeiro item que era maior que 2, os numeros 4 e 5 não foram considerados já que quando ele encontrou o número 3 que já estava de acordo com a regra, o método finalizou pois conseguiu encontrar um valor válido. 
