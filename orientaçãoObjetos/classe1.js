class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
      this.nome = nome
      this.valor = valor
    } // função construtora

  }
  class CicloFinanceiro{
    constructor(mes,ano){
      this.mes = mes
      this.ano = ano
      this.lancamentos = []
    }
    addLancamentos(...lancamentos){// adiciona 1 ou mais lancamentos em um array
      lancamentos.forEach(l => this.lancamentos.push(l))
    } 
    sumario(){
      let valorConsolidado = 0
      this.lancamentos.forEach( l => {
        valorConsolidado += l.valor
      })
      return valorConsolidado
    }
  }
  const salario = new Lancamento('Salário', 7500)
  const agua = new Lancamento('Água', -150)
  const internet = new Lancamento('Internet', -119)
  const luz = new Lancamento('Luz', -380)
  const cartao = new Lancamento('Cartão', -1000)
  const gasolina = new Lancamento('carro', -200)
  
  const contas = new CicloFinanceiro(03, 2022)
  contas.addLancamentos(salario, agua, internet, luz, cartao, gasolina)
  console.log(contas.sumario())