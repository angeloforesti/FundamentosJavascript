const pai = {nome: 'Pedro', corCabelo: 'Preto'}
const filha1 = Object.create(pai) // criando o object pai dentro de "filha1" , sendo assim filha é prototipo do pai e pode acessar corCabelo
filha1.nome = 'Ana'
console.log(filha1.corCabelo)  // "heranca" do pai

const filha2 = Object.create(pai) // criando outro "objeto" pai, mas acessado por "filha2"
console.log(filha2.nome)

const filha3 = Object.create(pai,{
  nome:{value: 'Bia', writable: false, enumerable: true}
})
console.log(filha3.nome)
filha3.nome = 'Carla' // não sobreescreve o nome "Bia" pois as propriedades foram definidas na linha 10, writable? FALSE
console.log(`${filha3.nome} tem cabelo ${filha3.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha3)) // se alterar enumerable (linha 10 ) para false, não apareceria no console

for(let key in filha3){
  console.log(key)
}

for(let keys in filha3){
  filha3.hasOwnProperty(keys)?
    console.log(keys): console.log(`Por Herença ${keys}`)
}