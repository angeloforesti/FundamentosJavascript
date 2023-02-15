const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
  }
  console.log(Object.keys(pessoa)) // recebe as chaves do objeto
  console.log(Object.values(pessoa)) // recebe os valores do objeto
  console.log(Object.entries(pessoa)) // recebe dentro de array as chaves e valores
  Object.entries(pessoa).forEach(e =>{ // correndo array usando entries e forEach
    console.log(`${e[0]}: ${e[1]}`)
  })
  Object.entries(pessoa).forEach(([chave, valor]) =>{ // mesmo exemplo da linha 9 mas usando destructuring
    console.log(`${chave}: ${valor}`)
  })
  
  Object.defineProperty(pessoa, 'dataNascimento', {   // criar um atributo ao objeto e  pode definir propriedades / permissões
    enumerable: true,
    writable: false,
    value: '01/01/2019'
  }) 
  pessoa.dataNascimento = '01/01/2017'
  console.log(pessoa.dataNascimento)
  console.log(Object.keys(pessoa))
  
  // Object.assign ( ECMAScript 2015) -> "nova função"
  
  const destino = {a:1} // vai receber os outros usando assign
  const o1 = {b:2}
  const o2 = {c:3, a:4}
  const obj = Object.assign(destino, o1, o2)  // assign usado para concatenar os demais ao "destino" como a  chave 'a' ja existia ele sobrescreve o valor
  console.log(destino)
  
  Object.freeze(obj)
  obj.c = 1234
  console.log(obj) // ao usar o freeze não consigo alterar o valor de obj = C:3