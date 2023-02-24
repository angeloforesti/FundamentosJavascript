const carrinho = [
    '{"Nome":"Borracha", "preco": 3.45}',
    '{"Nome":"Caderno", "preco": 13.90}',
    '{"Nome":"Kit de Lapis", "preco": 41.22}',
    '{"Nome":"Caneta", "preco": 7.50}'
  ]
  // Desafio Retornar array apenas com os preços
  const paraObjeto = json => JSON.parse(json) // criado para traduzir o JSON em Array
  const apenasPreco = produto => produto.preco // Criado para filtrar o preco 
  resultado = carrinho.map(paraObjeto).map(apenasPreco) // traduziu carrinho e filtrou apenas o preco
  console.log(resultado)