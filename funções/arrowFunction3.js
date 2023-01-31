let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)

//this dentro de uma função tradicional no JS varia conforme a chamada, no arrow é bem mais logico

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
