// pessoa -> 123
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = {nome: 'Ana'}  -> erro, esta em outro endereço de memoria

Object.freeze(pessoa)  // congelei o objeto, não posso alterar apartir daqui.
// freeze tornei o objeto constante, nada pode ser alterado, deletado ou adicionado
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC' // nao consegue alterar, incluir ou deleter coisas no objeto freeezado
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)