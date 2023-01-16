function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('aprovado com ' + nota)
    }

}

soBoaNoticia(8.1)
soBoaNoticia(6.1)



function verdade(valor){
    if(valor){
        console.log('é verdade... ' + valor)
    }
}

verdade()
verdade(null)
verdade(undefined)
verdade(NaN)
verdade('')
verdade(0)
verdade(-1)
verdade(' ')
verdade('?')
verdade([])
verdade([1,2])
verdade({})