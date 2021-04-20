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

/*function arrayImpares(){
  Arr = [];
  for(let i = 1; i<=50; i++){
    if(i%2 !== 0){
      Arr.push(i);
    }
  }
  return Arr;
}

console.log(arrayImpares());


/****EXERCISE 8****/
/*Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). */ 

/*function cuantosMayores(Arr,y)
{
  let count = 0;
  for(let i = 0; i<Arr.length; i++)
  {
    if(Arr[i]>y){
      count++;
    }
  }
  return count;
}

arr = [1,3,5,7,9,11];
console.log(cuantosMayores(arr,3));

/****EXERCISE 9****/
/*Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).*/ 

/*function cuadrados(Arr){
  for(let i = 0; i<Arr.length; i++)
  {
    Arr[i] *= Arr[i];
  }
  return Arr;
}

arr = [1,5,10,-2];
console.log(cuadrados(arr));

/****EXERCISE 10****/
/*Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).*/

/*function replaceNegatives(Arr){
  for(let i = 0; i<Arr.length; i++){
    if(Arr[i]<0){
      Arr[i] = 0;
    }
  }
  return Arr;
}

arr = [-1,5,10,-2];
console.log(replaceNegatives(arr));

/****EXERCISE 11****/
/*Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).*/ 

/*function MaxMinAvg(Arr){
  max = min = Arr[0];
  sum = 0;
  Arr2 = [];
  for(let i = 0; i<Arr.length; i++){
    sum += Arr[i];
    if(Arr[i]>max){
      max = Arr[i];
    }
    else if(Arr[i]<min){
      min = Arr[i];
    }
  }
  prom = sum/Arr.length;
  Arr2.push(max); Arr2.push(min); Arr2.push(prom);
  return Arr2;
}

arr = [1,5,10,-2];
console.log(MaxMinAvg(arr)); 

/****EXERCISE 12****/
/*Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
*/ 

/*function swapArray(Arr){
  if(Arr.length < 2){
    console.log('El array solo tiene un elemento');
  }
  else{
    temp = Arr[0];
    Arr[0] = Arr[Arr.length-1];
    Arr[Arr.length-1] = temp;
  }

  return Arr;
}

arr = [1,5,10,-2];
console.log(swapArray(arr));


/****EXERCISE 13****/
/*De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
*/ 

function replaceWithDojo(Arr){
  for(let i = 0; i<Arr.length; i++){
    if(Arr[i]<0){
      Arr[i] = 'Dojo'
    }
  }
  return Arr;

}

arr = [-1,-3,2];
console.log(replaceWithDojo(arr));