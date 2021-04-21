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

function FibonacciNormal(num){
  ant1 = ant2 = 1;
  if(num == 0 || num == 1){
    return 1;
  }
  else{
    for(let i = 2; i<=num; i++){
        temp = ant1+ant2;
        ant2 = ant1;
        ant1 = temp;

    }
    
  }
  return temp;
}
 y = FibonacciNormal(5);
 console.log(y);


 function FibonacciRecurs(num){
  if(num == 0 || num == 1){
    return 1;
  }
  else{
    return FibonacciRecurs(num-2) + FibonacciRecurs(num-1);
  }

 }

 x = FibonacciRecurs(7);
 console.log('recursivamente: ',x);

