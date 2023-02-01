//closure é o escopo creiado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a funcao

//contexto lexico em ação

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
//justamente por ser declarado dentro da função fora a memoria puxa o X armazenado dentro da função onde a mesma estas armazenado
