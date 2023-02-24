const nums = [1, 2, 3, 4, 5]
console.log(nums, `inicial`)
//map é utilizado para mapear um array e transformar ele em um array do mesmo tamanho so que com os dados transformados
// Map é um FOR com proposito

let resultado = nums.map( function(e){ // "e" (pode ser qualquer nome, ele apenas aponta para o valor ) neste caso aponta para o Valor (linha7) 
  return e * 2
}) // essa função pode receber 3 parametros nesta ordem, valor, index e o array 

console.log(resultado, `modificado, pelo map`)

// O MAP não transforma o array atual, ele gera outro array, nunca modifica o inicial
console.log(nums, `não modificado`)

const soma10 = e => e + 10  // aqui temos uma função arrow que recebe um elemento que soma o elemento + 10  
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado, `Resultado usando os 3 maps, com as funções declaradas na linha 15 até 17, usando o array inicial`)