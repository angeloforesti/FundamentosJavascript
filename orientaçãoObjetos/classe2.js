class Avo {
    constructor(sobrenome){
      this.sobrenome = sobrenome
    }
  }
  class Pai extends Avo{ // classe como prototipo
    constructor(sobrenome, profissao = 'Professor'){
      super(sobrenome) // chamando a função super do prototipo ( contructor(sobrenome)) AVO
      this.profissao = profissao
    }
  }
  class Filho extends Pai {
    constructor(){
      super('Silva') // chamando o super de pai e nomeando como Silva
    }
  }
  const filho = new Filho
  console.log(filho)