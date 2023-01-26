//criar de forma literal

function fun1(){

    
}
//armazenar em variavel

let fun2 = function(){

}

//armazenar em array
 let array = [function (a, b){return a +b}, fun1, fun2]
 console.log(array[0](2, 3))

//armazenar em objeto
const obj ={}
obj.falar = function(){return"opa"}
console.log(obj.falar())

//passar como parametro para outra
function run(fun){
    fun()
}
 run(function (){console.log('teste')})

 //pode retornar ou conter um outra função

 function soma(a,b){
    return function(c){
        console.log(a +b+c)
    }
 }
soma(2,3)(4)