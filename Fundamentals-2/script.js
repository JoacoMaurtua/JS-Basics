/******EXERCISE 1*****/
/*Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].*/

/*function changePositives(Arr){
  for(let i = 0; i<Arr.length; i++){
    if(Arr[i]>0){
      Arr[i] = 'big';
    }
  }
  return Arr;
}

arr = [-1,3,5,-5];
console.log(changePositives(arr));

/******EXERCISE 2*****/
/*Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. */

/*function lessGreather(arr){
  menor = mayor = arr[0];
  for(let i = 0; i<arr.length; i++){
      if(arr[i]<menor){
        menor = arr[i];
      }
      else if(arr[i]>mayor){
        mayor = arr[i];
      }
  }
  console.log(menor);
  return mayor;
}

arr = [1,6,7,12,43,56,0,8,7,-3];
z = lessGreather(arr);
console.log(z);

/******EXERCISE 3*****/
/**Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar. */

/*function penultimoImpar(arr){
    console.log(arr[arr.length-2]);
    let i = 0;
    while(i<arr.length){
      if(arr[i]%2 != 0){
        return arr[i]
      }
      i++;
    }
  }
  
arr = [2,6,4,-12,43,56,0,-8,9,-3];
console.log(penultimoImpar(arr));

/******EXERCISE 4*****/
/**Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original.  */

/*function duplicate(arr){
  newArr = [];
  for(let i = 0; i<arr.length; i++){
    newArr.push(arr[i]*2);
  }
  return newArr;
}

arr = [1,2,3];
console.log(duplicate(arr));

/******EXERCISE 5*****/
/*Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].*/

/*function replacePositives(arr){
  count = 0;
  for(let i = 0; i<arr.length; i++){
    if(arr[i]>0){
      count++;
    }
  }
  arr[arr.length-1] = count;
  return arr;
}

arr = [-1,1,1,1];
console.log(replacePositives(arr));


/******EXERCISE 6*****/
/*Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.*/ 

/*function impar(a){
  return a%2 != 0;
}

function par(a){
  return a%2 == 0;
}

function PartialImpartial(arr){
  for(let i = 0; i<arr.length; i++){
    if(impar(arr[i]) && impar(arr[i+1]) && impar(arr[i+2])){
      console.log('¡Qué imparcial!');
    }
    else if(par(arr[i]) && par(arr[i+1]) && par(arr[i+2])){
      console.log('¡Es para bien!');
    }
  }
}

arr = [1,2,6,3,9,11,10];
PartialImpartial(arr);

/******EXERCISE 7*****/
/*Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr.*/

/*function addOneImpar(arr){
  for(let i = 0; i<arr.length; i++){
    if(i%2 != 0){
      arr[i] += 1;
      console.log(arr[i]);
    }
  }
  return arr;
}

arr = [1,2,3,4,5,6,7];
console.log(addOneImpar(arr));

/******EXERCISE 8*****/
/*Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?*/

/*function replaceForNumbers(arr){
  for(let i = arr.length-1; i>0; i--){
    arr[i] = arr[i-1].length;
  }
  return arr;
}

arr = ['programar', 'dojo', 'genial'];
console.log(replaceForNumbers(arr));

/******EXERCISE 9*****/
/**Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3]) debería devolver [8,9,10] en un nuevo array.  */

function addSeven(arr){
  newArr = [];
  for(let i = 0; i<arr.length; i++){
    newArr.push(arr[i]+7);
  }
  return newArr;
}

arr = [1,2,3];
console.log(addSeven(arr));