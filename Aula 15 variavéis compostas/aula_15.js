// Cria um array (vetor) chamado "num" com 5 valores iniciais
let num = [5, 8, 2, 9, 3]

// Adiciona o número 1 ao final do array "num"
num.push(1)

// Ordena todos os elementos do array em ordem crescente
num.sort()

// Exibe o array completo no console
console.log(num)

// Exibe no console a quantidade de elementos que o array possui
console.log(`O vetor tem ${num.length} posições`)

// Exibe o primeiro valor do array após a ordenação
console.log(`O primeiro valor do vetor é ${num[0]}`)

// Procura a posição do valor 4 no array e armazena em "pos"
let pos = num.indexOf(4)

// Se indexOf(4) retornar -1, significa que o valor não foi encontrado
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    // Caso contrário, mostra em qual posição o valor foi encontrado
    console.log(`O valor está na posição ${pos}`)
}
