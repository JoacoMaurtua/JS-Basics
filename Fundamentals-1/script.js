/****EXERCISE 1****/
/*Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.*/

/*function numbers() {
  Arr = [];
  for (let i = 1; i <= 255; i++) {
    Arr.push(i);
  }
  return Arr;
}

console.log(numbers());

/****EXERCISE 2****/
/*Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. */

/*function sumaPares(){
  suma = 0;
  for(let i = 1; i<=1000; i++){
    if(i%2 == 0)
    {
      suma += i;
    }
  }
  return suma;
}

let z = sumaPares();
console.log(z);

/****EXERCISE 3****/
/*Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).*/

/*function sumaImpares(){
  suma = 0;
  for(let i = 1; i<=5000; i++){
    if(i%2 != 0)
    {
      suma += i;
    }
  }
  return suma;
}

let z = sumaImpares();
console.log(z);


/****EXERCISE 4****/
/*Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). */ 

/*function sumaArray(Arr){
  suma = 0;
  for(let i = 0; i<Arr.length; i++)
  {
    suma += Arr[i];
  }
  return suma;
}

Arr = [-5,2,5,12];
let z = sumaArray(Arr);
console.log(z);


/****EXERCISE 5****/
/*Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). */

/*function numMayor(Arr){
  mayor = Arr[0];
  let i = 0;
  while(i<Arr.length){
    if(Arr[i]>mayor){
      mayor = Arr[i]
    }
    i++;
  }
  return mayor
}

Arr = [-3,3,5,7];
console.log(numMayor(Arr));

/****EXERCISE 6****/
/*Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).*/

/*function promArray(Arr){
  suma = 0;
  for(let i = 0; i<Arr.length; i++)
  {
    suma += Arr[i];
  }
  return suma/Arr.length;
}

Arr = [1,3,5,7,20];
console.log(promArray(Arr));


/****EXERCISE 7****/
/*Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.*/ 

function arrayImpares(){
  Arr = [];
  for(let i = 1; i<=50; i++){
    if(i%2 !== 0){
      Arr.push(i);
    }
  }
  return Arr;
}

console.log(arrayImpares());