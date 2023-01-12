function rand({min = 1, max = 60}){

                 
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
    };

    const numbers = [];

do {
  const randomNumber = rand({ min: 1, max: 60 });
  if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
} while (numbers.length < 6);
console.log(numbers.sort());

    
    