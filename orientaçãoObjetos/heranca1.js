const ferrari = {
    modelo: 'F40',
    velMax: 324
  }
  const volvo = {
    modelo: 'V40',
    velMax: 200
  }
  
  console.log(ferrari.prototype) // prototype não existe dentro de objeto
  console.log(ferrari.__proto__) // __proto__ existe dentro de objeto
  console.log(ferrari.__proto__ === Object.prototype)
  console.log(volvo.__proto__ === Object.prototype)
  console.log(Object.prototype.__proto__ === null) //ele sempre aponta pra nulo 
  
  function MeuObjeto(){}
  console.log(typeof Object, typeof MeuObjeto)
  console.log(Object.prototype,MeuObjeto.prototype) //isso porque o objeto em js é uma função