function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco()) // nesse contexto acessa o gloal entao so retorna algo quando declaramos igual acima
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

//chamada da função é igual, muda apenas como passamos os parametros
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))//primeiro é o contexto,depois todos os parametros
console.log(getPreco.apply(carro, [0.17, '$']))//é passado em um array