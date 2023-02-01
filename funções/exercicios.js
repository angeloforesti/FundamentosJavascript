/*01) Crie uma função que dado dois valores (passados como parâmetros)
mostre no console a soma, subtração, multiplicação e divisão desses valores.*/
const calc = (n1, n2) => {
    let soma = n1 + n2;
    console.log(soma)
    let mult = n1 * n2;
    console.log(mult)
    let div = n1 / n2;
    console.log(div)
    let dim = n1 - n2;
    console.log(dim)
    
}

calc(2,3)
	


/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

const teste = function triangulo(x, y, z) {
    if(x === y && x === z && y === z){
        console.log('equilatero')
    }else if(x != y && x != z & y != z){
        console.log('escaleno')
    }else{
        console.log('isoceles')
    }

}

teste(1, 2, 2)
teste(1, 2, 3)
teste(2, 2, 2)

/*03) Crie uma função que recebe dois parâmetros, 
base e expoente, e retorne a base elevada ao expoente*/
const exp = (a, b) =>{
    return a**b
}

console.log(exp(2,1))
console.log(exp(2,2))
console.log(exp(2,3))
console.log(exp(2,4))

/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

