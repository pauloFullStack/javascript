<script>
    const arr = ['abacaxi', 'Maca', 'Banana'];

    arr.length //quantidade de itens do array
    console.log(arr.length);
    arr.push('Uva'); //adicionar item ao final do array
    console.log(arr.push('Uva'));
    arr.unshift('Uva'); //adicionar item ao inicio do array
    console.log(arr.unshift('Uva'));
    arr.pop(); //remover o ultimo item do array
    console.log(arr.pop());
    arr.shift(); //remover o primeiro item do array
    console.log(arr.shift());

    //concat é usado para mesclar dois ou mais arrays. Este método não altera as matrizes existentes, mas retorna uma nova matriz
    //arr.concat(['c']); 
    console.log(arr.concat(['c']));

    //join e a mesma coisa do implode do PHP
    //arr.join(['c']); 
    console.log(arr.join(['-']));

    //slice essa função pega os valores a partir da posição passada exemplo slice(1) ela vai retorna os valores a partir da posicao 1 do array. outro exemplo slice(1, 3) vai retorna as posições a partir da posição 1 ate a posição 3...
    //arr.slice(1); 
    console.log(arr.slice(1));

    //indexOf retorna o primeiro indice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente
    //['a', 'b', 'c'].indexOf('c'); 
    console.log(['a', 'b', 'c'].indexOf('b'));

    //Os caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é 0, e o índice do último caractere é str.length - 1.
    //arr.lastIndexOf('c'); 
    console.log(['a', 'b', 'c'].lastIndexOf('b'));

    //Os caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é 0, e o índice do último caractere é str.length - 1.
    //arr.lastIndexOf('c'); 
    console.log(['a', 'b', 'c'].lastIndexOf('b'));

    //O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a  pontuação de código unicode.
    //[2,15,3].sort('c'); 
    console.log([2,15,3].sort());

    //O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
    //[2,15,3].reverse(); 
    console.log([2,15,3].reverse());
</script>


