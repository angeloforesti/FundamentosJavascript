console.log(soma(3, 4))// por ser uma função declarada posso chamar ela antes sem problema
// console.log(mult(3, 4)) funções assim são lidas depois pelo navegador

//function declaration
function soma(x, y) {
    return x + y
}
console.log(soma(3, 4))

//function expression delcarar função anonima e associar a uma variavel
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

//named function expression alem de a variavel armazenar a função ela deixa de ser anonima e passa a ser nomeada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))