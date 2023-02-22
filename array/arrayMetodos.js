const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa'] // pilotos não pode ser alterado, mas os valores do array podem ser alterados
pilotos.pop() // POP remove o último elemento do Array! MAssa saiu
console.log(pilotos)

pilotos.push('Verstappen') // push adiciona um elemento na última posição do array
console.log(pilotos)

pilotos.shift() // Shift remove o primeiro item do array
console.log(pilotos)

pilotos.unshift('Hamilton') // unshift adiciona na primeira posição do array
console.log(pilotos)

// SPLICE adiciona e remover elementos
// Adicionar splice
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionados apartir do idice 2
console.log(pilotos)
//Remover splice
pilotos.splice(3, 1) // Remove no indice 3, apenas 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // slice retorna um novo array apartir do indice indicado ( nesse caso apartir do 2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // corta o array do indice 1 ao 4 ( o 4 não entra) slice = corta o array de acordo com os indice e gera um novo
console.log(algunsPilotos2)