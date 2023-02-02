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
    console.log(resultado, 'R$')

}

dinheiro(0.60000000001)

/*06) Elabore duas funções que recebem três parâmetros: 
capital inicial, taxa de juros e tempo de aplicação.
A primeira função retornará o montante da aplicação financeira sob o 
regime de juros simples e a segunda retornará o valor da aplicação 
sob o regime de juros compostos.*/

const aplicacao = (capital, taxa, tempo) => {
    let simples = capital * taxa / 100 * tempo
    console.log(simples)
}

const aplicacao2 = (capital, taxa, tempo) => {
    let composto = capital * (1 + taxa / 100) ** tempo
    console.log(composto.toFixed(2))

}

aplicacao(1000, 10, 12)
aplicacao2(1000, 10, 12)

/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

const bhaskara = (ax2, bx, c) =>{
    let delta = bx * bx - 4 * ax2 * c;
    if (delta < 0) {
      return "Delta é negativo";
    } else {
      let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
      let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
      return [x1, x2];
    }
  }

  console.log(bhaskara(3, 5, 1));
  console.log(bhaskara(3, 5, 12));