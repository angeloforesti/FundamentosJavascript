console.log(typeof String) // TODA FUNCTION TEM UM ATRIBUTO CHAMADO .PROTOTYPE
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())


Array.prototype.fisrt = function(){
  return this[0]
}

console.log([1,2,3,4,5].fisrt())
console.log(['a','b','c','d'].fisrt())