//exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('o evento ocorreu')
}

document.getElementsByTagName('body')[0].onclick = _ =>console.log('o evento ocorreu com uma arrow function')