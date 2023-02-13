const sequencia = {
    _valor: 1,       // convenção. Por "padrão" da linguagem, desenvolverdores entendem ele como uma variavel  que será acessada apenas dentro desse objeto
    get valor(){return this._valor++},
    set valor(valor) {
      if(valor > this._valor){
        this._valor = valor
      }
    }
  }
  console.log(sequencia.valor, sequencia.valor)
  sequencia.valor = 1000
  console.log(sequencia.valor, sequencia.valor)
  sequencia.valor = 900 //valor menor que ja tem, declarado acima, foi ignorado o metodo set
  console.log(sequencia.valor, sequencia.valor)