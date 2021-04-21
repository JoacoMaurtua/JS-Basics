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

function penultimoImpar(arr){
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

