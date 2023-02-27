Array.prototype.filter2 = function(callback){ // criando a função "filter", aqui callback pode receber qualquer nome, acessando prototype de array e craindo uma nova function chamada filter2
    const newArray = []
    for (let i = 0; i < this.length; i++){
      if(callback(this[i], i, this)){
        newArray.push(this[i])
      }
    }
    return newArray
  }
  
  const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true}, // elemento 1 do array
    {nome: "iPad Pro", preco: 4199, fragil: true}, // elemento 2 do array
    {nome: "Copo de Vidro", preco: 12.49, fragil: true}, // elemento 3 do array
    {nome: "Copo de Plástico", preco: 18.99, fragil: false} // elemento 4 do array
  ]
  
  const caro = produto => produto.preco >= 500 // arrow function Produto que aponta para produto.preco
  const fragil = produto => produto.fragil
  
  console.log(produtos.filter(caro).filter(fragil))
  console.log(produtos.filter2(caro).filter2(fragil))