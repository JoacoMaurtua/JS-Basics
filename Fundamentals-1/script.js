/****EXERCISE****/
/*Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.*/

function numbers() {
  Arr = [];
  for (let i = 1; i <= 255; i++) {
    Arr.push(i);
  }
  return Arr;
}

console.log(numbers());
