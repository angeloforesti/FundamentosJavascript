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

/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/


const minNotes = (value) => {
    let n100 = Math.floor(value / 100); //arredonda pra baixo e atribui o resultado a n100
    value = value % 100; //atribui o resto como novo value pro valor abaixo
    let n50 = Math.floor(value / 50);
    value = value % 50;
    let n10 = Math.floor(value / 10);
    value = value % 10;
    let n5 = Math.floor(value / 5);
    value = value % 5;
    let n1 = value;
  
    let result = '';
    if (n100 > 0) {
      result += n100 + (n100 > 1 ? ' notas de R$ 100. ' : ' nota de R$ 100. ');
    }
    if (n50 > 0) {
      result += n50 + (n50 > 1 ? ' notas de R$ 50. ' : ' nota de R$ 50. ');
    }
    if (n10 > 0) {
      result += n10 + (n10 > 1 ? ' notas de R$ 10. ' : ' nota de R$ 10. ');
    }
    if (n5 > 0) {
      result += n5 + (n5 > 1 ? ' notas de R$ 5. ' : ' nota de R$ 5. ');
    }
    if (n1 > 0) {
      result += n1 + (n1 > 1 ? ' notas de R$ 1. ' : ' nota de R$ 1. ');
    }
    return result;
  };
  
  console.log(minNotes(18));
  
  /*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

const planoDeSaude = idade =>{
    let padrao = 100
    if(idade < 10){
        console.log(`valor a ser pago é ${padrao+80}`)
    }else if(idade > 10 && idade < 30){
        console.log(`valor a ser pago é ${padrao+50}`)
    }else if(idade > 30 && idade < 60){
        console.log(`valor a ser pago é ${padrao+95}`)
    }else if(idade > 60){
        console.log(`valor a ser pago é ${padrao+130}`)
    };
    return idade
}

planoDeSaude(5);
planoDeSaude(20);
planoDeSaude(45);
planoDeSaude(65);

/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

const calcularValor= (mes, valor)=>{
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))

/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const mediaAluno = (cod,n1, n2, n3) => {
    let mediaPonderada = (n1*4 + n2*3 + n3*3)/10
    if(mediaPonderada >= 4){
        return (`aluno ${cod} aprovado com media de, ${mediaPonderada}, notas:${n1}, ${n2}, ${n3} `)
    }else{
        return (`aluno ${cod} reprovado com media de, ${mediaPonderada}, notas:${n1}, ${n2}, ${n3} `)
    }
}

console.log(mediaAluno(100,8,7,6))

/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while*/
const olaPessoal = _ => {
    let i = 0
    while(i < 11){
        console.log('ola pessoal');
        i++
    }
}

olaPessoal()

/*25) Escrever um programa para exibir os números de 1 até 50 na tela.*/
const muitosNumeros = _ => {
    let i = 0
    while(i < 51){
        console.log(i);
        i++
    }
}

muitosNumeros()

/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/

const parImpar = _  => {
    let i  = 0 
    while(i<=100){
         i++
        
    if(i%2 === 0 ){
        console.log(i)
    }

}

}

parImpar() 

/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

const calcularCrescimento = (altura1, taxa1, altura2, taxa2) => {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));

/*) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/


const leitorDeArray = numeros => {
    let contadorPar = 0
    let contadorImpar = 0 

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0 ) {
            contadorPar++
        }else{
            contadorImpar++
        }
    }
    console.log("a quantia de pares é de " +contadorPar)
console.log("a quantia de impares é de " +contadorImpar)

}


leitorDeArray([1,2,3,4,5,6,7,8])


/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

const percorrendoArray = numeros => {
    let contadorIntervalo = 0
    let contadorFora = 0

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] >= 10 && numeros[i] <= 20   ) {
            contadorIntervalo++
        }else{
            contadorFora++
        }
    }
    console.log("a quantia de numeros entre 10 e 20 é de " +contadorIntervalo)
console.log("a quantia restante é de " +contadorFora)

}


percorrendoArray([10,20,30,40,50,60,70,88])


//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let vetor = [10, 3, 5, 8, 2, 13];
let maior = vetor[0];
let menor = vetor[0];
//console.log(maior)
//console.log(menor)

for(let i = 1; i < vetor.length; i++){
  if(vetor[i] > maior){
    maior = vetor[i];
  }
  if(vetor[i] < menor){
    menor = vetor[i];
  }
}

console.log("O maior valor é: " + maior);
console.log("O menor valor é: " + menor);


/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

let vetor2 = [1, -3, 5, -8, 2,-6];
let negativo = 0
for(let i = 1; i < vetor2.length; i++){
    if(vetor2[i] < 0){
        negativo++;
      }

}

console.log("A quantia de numeros negativos é de: " + negativo);

//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros

let inteiros  = [1, 2, 3, 4, 5, 6];
let soma = 0;

for(let i = 0; i < inteiros.length; i++) {
soma = soma + inteiros[i];
}

console.log(soma)

/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

let vetorInteiro = [1, 'um', 0,1]
let vetorString = [2, 'dois', 0,2]
let vetorDouble = [3, 'tres', 0,3]

const novoArray = vetorInteiro.concat(vetorString);
const novoArray2 = novoArray.concat(vetorDouble);

console.log(novoArray2)

/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

const verificadora = (strg1,strg) => {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
    
}

/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console*/

const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

let vetorResultante = vetorPilha.concat(vetorAdiciona)


console.log(vetorResultante)


/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5*/
const function1 = (vetor1, multiplicando) =>{
    arrayResultado = []
    for(let i = 0; i < vetor1.length; i++){
        arrayResultado.push(multiplicando * vetor1[i])
}
    return arrayResultado
}

console.log(function1([1, 2, 4], 5))

const function2 = (vetor2, multiplicando) =>{
    arrayResultado = []
    
    for(let i = 0; i < vetor2.length; i++){
        if(vetor2[i] >= 5 ){
        arrayResultado.push(multiplicando * vetor2[i])
}else{
    console.log('ta errado')
}
    }
    
    return arrayResultado
}


console.log(function2([1, 5, 6], 5))

/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)

/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

const inicioFim = (inicio, fim) => {  
    let newArray = []
    let diff = fim - inicio
    for(let i = 0; i < diff; i++) {
      if((inicio + i) % 2 !== 0) {
        newArray.push(inicio + i)    
      }
    }
    return newArray
  }
  
  console.log(inicioFim(1, 100))
  