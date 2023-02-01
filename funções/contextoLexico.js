const valor = 'global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()

//a função carrega consigo o contexto lexico de onde foi declarada, não importa onde voce chame ela, ela segue o contexto que foi escrito