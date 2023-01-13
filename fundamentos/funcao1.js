// nem sempre precisa deixar explicito o que a função vai retornar, as vezes num primeiro momento ela pode não retornar nada
// um trecho de codigo nomeado por voce que podera ser reutilizado onde voce quiser
// recebe parametros de entrada, executa o algorito  e retorna valor. podendo ate não receber nada ou nao retornar nada

//funcao sem retorno
function imprimirSoma (a, b) {
console.log (a + b)
}

imprimirSoma (2, 3)

//funcao com retorno 
function soma(a, b = 1) {
    return a +b
}
console.log( soma (2, 3))
console.log (soma (2))