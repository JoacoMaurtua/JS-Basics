/***EXERCISE 1***/
/*Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).*/ 

/*function Figma(num){
  sum = 0;
  for(var i = 1; i<=num; i++){
    sum += i;
    console.log(i,'+');
  }
  console.log('=')
  return sum;
}

console.log(Figma(5));

function FigmaRecursive(num){        //USANDO RECURSIVIDAD
  if(num == 0) {return 0;}
     
  else{
    return num + FigmaRecursive(num-1);
  }     
}

console.log('Funcion recursiva: ',FigmaRecursive(5));

/***EXERCISE 2***/
/*Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).*/ 

/*function factorialNormal(num){
  factorial = 1;
  for(var i = 1; i<=num; i++){
    factorial *= i;
    console.log(i,'*');
  }
  console.log('=')
  return factorial;
}

z = factorialNormal(5);
console.log(z);

function factorialRecursivo(num){  //USANDO RECURSIVIDAD
  if(num == 1) {return 1;}
  else{
    return num * factorialRecursivo(num-1);
  }
}

z = factorialRecursivo(5);
console.log('Recursivamente: ',z);

/***EXERCISE 3***/
/** Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. */

/*function FibonacciNormal(num){
  ant1 = ant2 = 1;
  if(num == 0 || num == 1){
    return 1;
  }
  else{
    for(let i = 2; i<=num-1; i++){
        temp = ant1+ant2;
        ant2 = ant1;
        ant1 = temp;

    }
    
  }
  return temp;
}
 y = FibonacciNormal(7);
 console.log('Iterativamente',y);


 function FibonacciRecurs(num){
  if(num == 0 || num == 1){
    return num;
  }
  else{
    return FibonacciRecurs(num-1) + FibonacciRecurs(num-2);
  }

 }

 x = FibonacciRecurs(7);
 console.log('recursivamente: ',x);

 /***EXERCISE 4***/
 /*Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] 
 devuelve “Liam”. Si el array es muy pequeño, devuelve null.  */

 /*function penultimo(arr){
   if(arr.lenght <= 1) {return null;}
   return arr[arr.length-2];
 }

 arr = [42,true,4,'Liam', 7]; 
 console.log(penultimo(arr));

 /***EXERCISE 5***/
 /*Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. 
  Si el array es muy pequeño, devuelve null. */

  /*function nLast(arr,N){
      if(arr<N){ return null};
      return arr[N]; 
  }

console.log(nLast([5,2,3,6,4,9,7],3))

/***EXERCISE 6***/
/*Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7],
 devuelve 7.  Si el array es muy pequeño, devuelve null.*/ 


 function secondBigger(arr){

   mayor = arr[0];
   if(arr.length < 2) {return null;}

   for(let i = 1; i<arr.length; i++){
     if(arr[i]>mayor){ mayor = arr[i];}  //Aqui obtengo el mayor elemento
   }

   temp = arr[arr.indexOf(mayor)];
   arr[arr.indexOf(mayor)] = arr[arr.length-1];
   arr[arr.length-1] = temp;                          //Intercambio la posicion del elemento mayor con la del ultimo elemento
 
   segundoMayor = arr[0];
   for(let i = 1; i<arr.length-2; i++){                //solo recorro hasta el penultimo elemento y repito el proceso
    if(arr[i]>segundoMayor) {segundoMayor = arr[i];}
   }
   console.log(arr);
   return segundoMayor;
 }

 console.log(secondBigger([42,1,4,3.14,7]));

 /***EXERCISE 7***/
 /*Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par, y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].*/

 /*function duplicate(arr){
    for(let i = arr.length-1; i>=0; i--){
      arr[2*i+1] = arr[i];
      arr[2*i] = arr[i]
    }
    console.log(arr.length);
    return arr;
 }

 arr = [4, "Ulysses", 42, false];
 console.log(duplicate(arr)); */