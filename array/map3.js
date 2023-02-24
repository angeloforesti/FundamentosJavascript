// criando a função MAP
Array.prototype.map2 = function(callback){ // callback poderia ser qualquer nome
    const newArray = []
    for(let i = 0; i < this.length; i++){ // this se refere ao array original ( newArray )
      newArray.push(callback(this[i], i, this)) // em ordem do callback, Elemento Atual, Indice, Array Original
    }
    return newArray
  }
  
  const carrinho = [
    '{"Nome":"Borracha", "preco": 3.45}',
    '{"Nome":"Caderno", "preco": 13.90}',
    '{"Nome":"Kit de Lapis", "preco": 41.22}',
    '{"Nome":"Caneta", "preco": 7.50}'
  ]
  
  const paraObjeto = json => JSON.parse(json)
  const apenasPreco = produto => produto.preco
  resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
  console.log(resultado)