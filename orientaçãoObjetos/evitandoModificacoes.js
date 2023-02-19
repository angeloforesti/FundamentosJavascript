// Object.preventExtensions, não permite adicionar novo atributos, pode excluir mas não aumentar.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
  })
  
  console.log('Extensível: ', Object.isExtensible(produto))
  
  produto.nome = 'Borracha' // permitido pois o objeto não está congelado ( freeze )
  produto.descricao = 'Borracha Escolar Branca' // Não permitido, pois não pode adicionar novo atributo ao produto devido ao Object.preventExtensions
  delete produto.tag // permitido pois, posso excluir, mas não adicionar
  console.log(produto)
  
  //Object.seal, selar um objeto. Não posso adicionar, excluir. Permitido apenas modificar
  const pessoa = {nome: 'Juliana', idade: 35}
  Object.seal(pessoa)
  console.log('Selado', Object.isSealed(pessoa))
  
  pessoa.sobrenome = 'Silva' // não posso aidcionar um novo atributo ( Object.seal)
  delete pessoa.nome // não posso deletar ( Object.seal)
  pessoa.idade = 29 // posso modificar  ( Object.seal)
  console.log(pessoa)
  
  // Object.freeze = seal  + valores constantes, não é permitido Adicionar, Excluir ou modificar. 100% constante (writable = false)