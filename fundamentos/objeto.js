const prod1 = {}
prod1.nome = 'Celular Ultra Mega'   //obejto: uma coleção de chaves e valores, podendo ate ter outro objeto dentro do objeto
prod1.preco = 4998.90
prod1['desconto legal']=0.4 // evitar atributos com espaço

console. log(prod1)

const prod2 = {
    nome: 'capa de celular',
    preco: 79.90,
    obj: {prod1} //objeto no objeto
}    

console. log(prod2)
