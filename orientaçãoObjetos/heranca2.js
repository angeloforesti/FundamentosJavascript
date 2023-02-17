// Cadeia de Protótipos (prototype chain)

Object.prototype.attr0 = '0' // evite fazer isso! Object.prototype é o PAI DE TODOS OS PROTOTIPOS QUE APONTA NULL, alterar ele, altera o "último" prototipo de qualquer cadeia
const avo = { attr1: 'A'} // prototipo do avo é o Object.prototype
const pai = { __proto__: avo, attr2: 'B', attr3: '3'} // prototipo é o Avô
const filho = {__proto__: pai, attr3: 'C'} // prototipo é o Pai

console.log(filho.attr1) // achou no avo
console.log(filho.attr0) // undefined, não tem em nenhum dos prototipos
console.log(filho.attr0) // neste caso existe pois foi definido na linha 3
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // o atribudo attr3 do filho subrescreve o do pai, pois ele achou primeiro no filho 

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta){
    if(this.velAtual + delta <= this.velMax){
     this.velAtual += delta
    }else {
     this.velAtual = this.velMax
    }
  },
  status(){
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // shadowing ( sombreando a vel max do objeto pai)
}

const volvo = {
  modelo: 'V40',
  status(){ // shadowing a função status
    return `${this.modelo}: ${super.status()}` // super usado para referenciar o metodo do prototipo
  }
}
Object.setPrototypeOf(ferrari, carro) // primeiro é o target e o segundo o prototypo "criado aqui"
Object.setPrototypeOf(volvo, carro) // Object.setPrototypeOF definir a relação de prototipos

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())