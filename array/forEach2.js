Array.prototype.forEach2 = function(callback){ /* functoin para simular o foreach -- callback poderia ser qualquer nome 
acessamos o prototype do array (que é um obj) atraves do .prototype e nele declaramos a funcao forEach2
*/

    for(let i=0; i<this.length; i++){ // this aponta para o array
      callback(this[i], i, this) // this aponta para o array completo
    }
  }
  
  const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
  
  aprovados.forEach2(function(nome, indice, array){ // criado metodo foreach2
    console.log(`${indice + 1}) ${nome} `)
    console.log(array)
  })