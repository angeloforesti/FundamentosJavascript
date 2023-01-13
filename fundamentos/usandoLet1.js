var numero= 1
{
let numero = 2
console.log( 'dentro =', numero)
}
console.log('fora =', numero)

let teste = 1
{
let teste = 2
console.log( 'dentro =', teste)
}
console.log('fora =', teste)

//VAR => escopo global e escopo de função
//LET => escopo global, escopo de função e escopo de bloco.