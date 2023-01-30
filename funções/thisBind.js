const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) //this para acessar a saudaçãono obj, sem o whi retorna erro
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradiugmas funcional e OO

const falardePessoa = pessoa.falar.bind(pessoa)//referencia o this atraves do objeto que passou para a função bind
falardePessoa()