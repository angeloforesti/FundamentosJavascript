class pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`ola, meu nome é ${this.nome}`)

    }
}

const p1 = new pessoa('joao')
p1.falar()

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('joao')
p2.falar()