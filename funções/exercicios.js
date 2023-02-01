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

calc(2, 3)



/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

const teste = function triangulo(x, y, z) {
    if (x === y && x === z && y === z) {
        console.log('equilatero')
    } else if (x != y && x != z & y != z) {
        console.log('escaleno')
    } else {
        console.log('isoceles')
    }

}

teste(1, 2, 2)
teste(1, 2, 3)
teste(2, 2, 2)

/*03) Crie uma função que recebe dois parâmetros, 
base e expoente, e retorne a base elevada ao expoente*/
const exp = (a, b) => {
    return a ** b
}

console.log(exp(2, 1))
console.log(exp(2, 2))
console.log(exp(2, 3))
console.log(exp(2, 4))

/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

const divisao = (a, b) => {
    let div = a / b;
    console.log(div);
    let resto = a % b;
    console.log(resto)
}
divisao(4, 2)

/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

const dinheiro = valor => {
    let resultado = valor.toFixed(2)
    console.log(resultado,'R$')

}

dinheiro(0.60000000001)