//transformar um array em um unico elemento, ou outro array ou em string, parametro acumulado de chamada em chamada

const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: false },
    {nome: 'Ana', nota: 8.7, bolsista: true },
  ]
  
  console.log(alunos.map(alunos => alunos.nota), `Antes`)
  const resultado = alunos.map( aluno => aluno.nota). reduce(function(acumulador, atual){ // array passando um map ("novo array" como nome de Aluno e buscando a nota)
    // reduce recebe valores > Acumulador, Valor, indice, Array 
    // o valor recebido no acumulador é passado para o proximo, como o "atual", mas nesse caso estamos somando o anterior(acumulador) + o proximo valor ( atual )
      console.log(acumulador, atual)
      return acumulador + atual
  })
  
  console.log(resultado, `resultado final`)