function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
  }
  
  const aula1 = new Aula('Bem vindo', 123)
  const aula2 = new Aula('Até Breve', 456)
  console.log(aula1, aula2)
  
  // simulando o operador new usando prototype
  function novo(f, ...params){
    const obj = {} // criou um obj vazio
    obj.__proto__ = f.prototype // relacionamos obj.proto ao prototype de F
    f.apply(obj, params) // F vai receber o obj com os atributados dentro de um array (params é um conjunto de arrays)
    return obj
  }
  
  const aula3 = novo(Aula, 'Bem vindo', 123)
  const aula4 = novo(Aula, 'Até breve', 456)
  console.log(aula3, aula4)