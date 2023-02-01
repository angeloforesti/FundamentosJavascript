function criarProduto(nome, preco) {
    return{
        nome: nome,
        preco: preco,
        desconto: 0.1 * preco
    }
}

console.log(criarProduto('gilete', 45))
console.log(criarProduto('sabonete', 2))
console.log(criarProduto('escova', 15))
console.log(criarProduto('pasta de dente', 8))