let dobro = function (a) {
return 2*a

}


dobro = (a) => {
    return 2*a
}

dobro = a => 2 * a // caso tenha apenas um parametro pode retirar os parenteses e com o retorno implicito sem chaves
console.log(dobro(Math.PI))

let ola = function(){
    return "ola"
}


ola = () =>  "ola"
ola = _ =>  "ola" //tambem serve como param
console.log(ola())
