// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica' //nao aconselhavel declarar assim
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do Produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprieatario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores:[{
    nome:'Junior',
    idade: 19
  },
{
  nome: 'Ana',
  idade: 42
}],
calcularValorSeguro: function(){ // function dentro do objeto
  //....
}
}

carro.proprieatario.endereco.numero = 1000 //notação ponto
carro['proprieatario'] ['endereco'] ['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprieatario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)//retorna undefined porque o objeto carro existe e nele podemos tentar acessar ate o que nao existe
//console.log(carro.condutores.length) // erro, pois carro.condutores foi deletado e ao acessar algo que não existe dentro de algo que ja nao existia, retorna erro.