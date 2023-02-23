const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x){ // foreach recebe 3 parametros (oficiais, pode ter muito mais) => nome, indice, array
  console.log(`${indice + 1} ${nome} `)
  //console.log(array)
  //console.log(x) no caso o x nao existe nesse caso
})

aprovados.forEach(nome => console.log(nome)) // usando arrow function, "sem parametros"

const exibirAprovado = aprovado => console.log(aprovado) //salvei a funcao em uma variavel e passei a variavel no foreach
aprovados.forEach(exibirAprovado)