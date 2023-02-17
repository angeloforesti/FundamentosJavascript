function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
  console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)// o objeto criado por uma funcao construtora aponta para o function.prototype dessa funcao
console.log(MeuObjeto.__proto__ === Function.prototype)// a funcao construtora aponta para function.prototype
console.log(Function.prototype.__proto__ === Object.prototype)// o proto de uma function.prototype aponta para o object.prototype
console.log(Object.prototype.__proto__ === null)