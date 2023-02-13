const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b:b, c:c} // duplicidade nao mais necessaria
const obj2 = {a,b,c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //constante ou variavel entre colchetes que sera passada pra criar o atributo do obj
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} //constante ou variavel entre colchetes que sera passada pra criar o atributo do obj
console.log(obj4)

const obj5 = {
  funcao1: function(){
      //....
  },
  funcao2(){ // metodo novo para declarar funcntion dentro do objeto, diferente do primeiro que usa a palavra function e 2 pontos

  },
}
console.log(obj5)