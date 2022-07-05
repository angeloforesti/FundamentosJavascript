let valor // não inicializad
console.log(valor)

valor= null //  nao tem nenhum valor dentro dela, e não tem nenhuma referencia de nenhum local de memoria (em caso de valores n primitivos)
console.log(valor)

const produto = {}
produto.preco = 35
console.log(produto)

produto.preco= undefined // evite atribuir undefined deixe que a linguagem atribua para você, caso queira deixar um valor sem nada utilize o null
console.log(!!produto.preco)
console.log(produto)