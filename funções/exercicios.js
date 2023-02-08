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

/*12) Faça um algoritmo que calcule o fatorial de um número.*/
const fatorial = numero => {
    let resultado = 1
    for (let i = numero; i >= 1; i--) {
        resultado *= i;
    }
    return resultado

}
console.log(fatorial(5))

/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/
const util = dia => {
    switch (dia) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('dia da semana')
            break
        case 1:
        case 7:
            console.log('final de semana')
            break
        default:
            console.log('data invalida')
    }

}

util(5)
util(7)
util(8)

/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

const venderFruta= (fruta) => {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')

/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

const carros= (carro) => {
    switch (carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso aqui.')
            break
        case 'camionete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        case 'sedan':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('indisponivel')
    }
}

carros('hatch')
carros('camionete')
carros('sedan')
carros('moto')

/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));

/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido*/

function aumento (salario, aumentoReal,) {
    switch (aumentoReal) {
        case 'A':
            return salario + salario*0.10
        case 'B':
            return salario + salario*0.15
        case 'C':
            return salario + salario*0.20
        default:
            return 'Operação inválida'
    }
}

console.log(aumento(1000, 'A'));
console.log(aumento(1000, 'B'));
console.log(aumento(1000, 'C'));
console.log(aumento(1000, 'D'));

/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function leitora (lerNumero) {
    switch (lerNumero) {
        case 1:
            return console.log('um')
        case 2:
            return console.log('dois')
        case 3:
            return console.log('tres')
        case 4:
            return console.log('quatro')
        case 5:
            return console.log('cinco')
        case 6:
            return console.log('seis')
        case 7:
            return console.log('sete')
        case 8:
            return console.log('oito')
        case 9:
            return console.log('nove')
        case 10:
            return console.log('dez')
        default:
            return 'numero fora do intervalo'
    }
}

leitora(1)
leitora(5)
leitora(25)

/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/


function restaurante (codigo, quantidade) {
    switch (codigo) {
        case 100:
            return quantidade * 3
        
        case 200:
            return quantidade * 4
        
        case 300:
            return quantidade * 5.5
        
        case 400:
            return quantidade * 7.5
        
        case 500:
            return quantidade * 3.6
        
        case 600:
            return quantidade * 2.8
        
        default:
            return 'Operação inválida'
    }
}

console.log(restaurante(100, 10))
console.log(restaurante(200, 10))
console.log(restaurante(300, 10))
console.log(restaurante(400, 10))
console.log(restaurante(500, 10))
console.log(restaurante(600, 10))
console.log(restaurante(60, 10))