for (var i = 0; i < 10; i++){
    console.log(i)
} 

console.log('i=', i)

for (let b = 0; b < 10; b++){
    console.log(b)
} 

//console.log('b=', b)

const funcs = []

for (var a = 0; a < 10; a++){
    funcs.push ( function ( ) {
        console.log (a)
    })

}
funcs [2]()
funcs [8] ()

const func = []

for (let a = 0; a < 10; a++){
    func.push ( function ( ) {
        console.log (a)
    })

}
func [2]()
func [8] ()