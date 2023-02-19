// array é um "objeto"  especial, organizado por index, iniciando em 0
// indice0, indice1, indice2, indice3
console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof []) // array literal é usado com cochetes como um objeto é usado como chaves

// array não é obrigatoriamente homogeneo, porém é um boa prática trabalhar com dados homogeneos

let aprovados = new Array('Bia', 'Carlos', 'Ana') // forma válida, não é o mais usado.
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // notação literal, mais usada e recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined, em outras linguagens retorna erro

aprovados[3] = 'Paulo' // forma válida para adicionar elementos em um array ( mais comumente usada para substituir dados)
console.log(aprovados[3])
aprovados.push('Abia') // forma politicamente correta de adicionar um elemento no array
console.log(aprovados.length)
console.log(aprovados[4])

aprovados[9] = 'Rafael' // adicionado 5 posições depois, é declarado sim, mas o que não estão declarados retornam Undefined ( 4 empty items )
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados) 
aprovados.sort() // coloca o array em ordem aleatorias
console.log(aprovados)

delete aprovados[1] // forma de deletar o conteudo do indice, colocando undefined no lugar, não altera o resto do array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1) // vai excluir entre o indice 1 e 1
aprovados.splice(1,2) // vai excluir entre o indice 1 e 2
aprovados.splice(1,2, 'Elemento1', 'Elemento2') // adiciona elementos entre 1 e 2
// splice usado para adicionar, remover e adicionar e remover ao mesmo tempo
console.log(aprovados)