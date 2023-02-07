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

const bhaskara = (ax2, bx, c) => {
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

/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenh o. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/


let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"


function avaliaPontuacoes(stringPontuacoes) { //funcao recebe a string 
    let pontuacoes = stringPontuacoes.split(", ") // separa a string em um array de substrings
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))

/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

const sistemaEscola = nota => {
    if (nota >= 40) {

        nota = 5 - nota % 5 + nota
        return `aprovado  com nota ${nota}`;
    } else {
        return `reprovado  com nota ${nota}`;
    }
}

console.log(sistemaEscola(39))
console.log(sistemaEscola(48))
console.log(sistemaEscola(50))

/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

const verifica = numero => {
    if (numero % 3 === 0) {
        return true
    } else {
        return false
    }

}

console.log(verifica(3))
console.log(verifica(5))

/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

const anoBissexto = ano => {
    if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
      console.log(`O ano ${ano} é bissexto.`);
      return true;
    } else {
      console.log(`O ano ${ano} não é bissexto.`);
      return false;
    }
  };

console.log(anoBissexto(2024))
console.log(anoBissexto(2400))
console.log(anoBissexto(2124))
console.log(anoBissexto(2100))

