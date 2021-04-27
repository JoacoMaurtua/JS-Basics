/***********EJERCICIO 1***********/
/*13. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

Ejemplo:
    arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
    arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]
*/ 

// var leon = {
//   sexo:'macho',
//   melena: true,
//   peso: '450kg'
// }

// leon["valor"] = 1;
// leon["valor"] = 2;
// leon["valor"] = 3;
// console.log(leon);

/*function arregloDeObjetos(num){
  let array = [];
  for(var i = 1; i<=num; i++){
    let objeto = {};
    objeto["valor"] = i;
    array.push(objeto);
  }
  return array;
}

console.log(arregloDeObjetos(3));
  
/***********EJERCICIO 2***********/
/*14. Arreglo de objetos 
Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]
*/

/*function arregloDeObjetos(num,string){
  let array = [];
  for(var i = 1; i<=num; i++){
    let objeto = {};
    objeto[string] = i;
    array.push(objeto);
  }
  return array;
}

console.log(arregloDeObjetos(3,"hola"));

  
/***********EJERCICIO 3***********/

/*15. Única propiedad
Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 

Ejemplo: 
 var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]*/

function oneProperty(arrayObj,string){
  var array = [];
  for(let i = 0; i < array.length; i++){
      for(let j in arrayObj[i]){
        let obj = {};
        if(string === j){
          obj[j] = arrayObj[i][j];
          array.push(ObjVacio);
        }
      }

    }
    return array;

}

var  arreglo = [ { name: 'lucas', edad: 20 }, { name: 'santi', edad: 22 } ]
console.log(oneProperty(arreglo,'name'));
