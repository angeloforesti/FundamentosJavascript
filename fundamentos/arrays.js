const valores = [7.7, 8.9, 6.3, 9.2]
console.log (valores [0], valores[3])
console.log (valores [4])

//valores[10] = 10             como js é tipagem fraca, ele retorna elementos undefined na arrey
//console. log (valores)

valores[4] = 10                      //consegue adicionar elementos
console. log (valores)
console.log(valores.length) //ver tamanho da array

valores.push({id: 3}, false, null, 'teste') //adiciona valores no array
console.log(valores)

console.log(valores.pop())  //função que retira o ultimo elemento do array
delete valores [0] //deleta o elemento do indice escolhido

console.log(typeof valores) // em js array é do tipo object