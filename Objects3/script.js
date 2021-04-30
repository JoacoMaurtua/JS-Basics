
/*******EJERCICIO 1*******/

/* 
Ej 3: Filtrando propiedades.

En este ejercicio deberás definir una función que reciba como primer 
parámetro un arreglo de objetos y como segundo parámetro un arreglo de strings.
Los strings serán nombres de propiedades que se encuentren en los objetos del primer arreglo.
además, cada índice del primer arreglo se corresponde con el mismo índice del segundo.
La función devolverá un nuevo arreglo que en cada índice tendrá el valor que tenga el objeto
(correspondiente al primer arreglo) en la propiedad que indique el segundo arreglo.
Para clarificar la consigna, a continuación hay un ejemplo:

objetos = [{forma: 'circulo' tamaño: 3},

          {forma: “triangulo”, color: 'amarillo', tamaño: 4}]

propiedades = ['color', 'forma' ]

Entonces, para el primer objeto la función debería buscar el color y para el segundo la

forma. Finalmente la función devolvería esto te tiene que devolver ['verde', 'triangulo'].

Usá estos arreglos para probar tu función:

objetos = [{forma: "circulo" color: 'verde', tamaño: 3},

{forma: "triangulo", color: 'amarillo', tamaño: 4},

{forma: "cuadrado", color: "celeste", tamaño: 2},

{forma: "trapecio", color: "fucsia", tamaño: 7},

{forma: "estrella", color: 'violeta', tamaño: 1}]

propiedades = ['color', 'forma', 'tamaño', 'forma', 'color']

 */

function filtrandoPropiedades(arrayObjetos, arrayStrings){
  
  let newArray = [];
  for(let i = 0; i<arrayObjetos.length || i<arrayStrings.length; i++){
    for(let prop in arrayObjetos[i]){
      if(arrayStrings[i] === prop){
          newArray.push(arrayObjetos[i][prop]);
      }
    }
  }
  return newArray;
}

objetos = [{forma: "circulo", color: 'verde', tamaño: 3},

          {forma: "triangulo", color: 'amarillo', tamaño: 4},

          {forma: "cuadrado", color: "celeste", tamaño: 2},

          {forma: "trapecio", color: "fucsia", tamaño: 7},

          {forma: "estrella", color: 'violeta', tamaño: 1}]

propiedades = ['color', 'forma', 'tamaño', 'forma', 'color']

//console.log(filtrandoPropiedades(objetos,propiedades)); //verde triangulo 2 trapecio violeta


/*******EJERCICIO 2*******/

// Pluck 
// Escribí una función `pluck` que tome dos parámetros, un arreglo de objetos y el nombre de una propiedad. 
// La función devolverá un nuevo arreglo solo con los valores dentro de la propiedad recibida. 
// Ejemplo: var productos = [{nombre: 'TV LCD', precio: 100}, {nombre: 'Computadora', precio: 500}] pluck (productos, 'nombre') 
// ['TV LCD', 'Computadora' ] pluck (productos, 'precio') // [100, 500]

// let productos = [{nombre: 'TV LCD', precio: 100}, {nombre: 'Computadora', precio: 500}]

// pluck (productos, 'nombre') // ['TV LCD', 'Computadora']
// pluck (productos, 'precio') // [100, 500]
 
function pluck(arrayObjetos,propiedad){
  let newArray = [];
  for(let i = 0; i<arrayObjetos.length; i++){
    for(let prop in arrayObjetos[i]){
      if(propiedad === prop){
          newArray.push(arrayObjetos[i][prop]);
      }
    }
  }
  return newArray;
}

let productos = [{nombre: 'TV LCD', precio: 100}, {nombre: 'Computadora', precio: 500}];

//console.log(pluck(productos, 'precio'));

/*******EJERCICIO 3*******/
// Valor Stock 
// Escribí una función valorStock que tome un arreglo de productos como parámetro. 
// La función debe devolver un nuevo arreglo con objetos que tengan el nombre de cada producto y el valor total del stock:	

// Ejemplo:
// var productos = [{nombre: 'TV LCD', precio: 100, stock: 50}, {nombre: 'Computadora', precio: 500, stock: 50}, {nombre: 'Iphone', precio: 1000, stock: 10}] 
// valorStock (productos) // Debe retornar [{TV LCD: 5000}, {Computadora: 25000}, {Iphone: 10000}] 
 
function valorStock(arrayProductos){
  let newArray = [];
  
  for(let i = 0; i<arrayProductos.length; i++){
      let objeto = {};
      objeto[arrayProductos[i]["nombre"]] = arrayProductos[i]["precio"] * arrayProductos[i]["stock"];
      newArray.push(objeto);  
  }
 
  return newArray;

}

var productos1 = [{nombre: 'TV LCD', precio: 100, stock: 50}, 
                 {nombre: 'Computadora', precio: 500, stock: 50},   
                 {nombre: 'Iphone', precio: 1000, stock: 10}
                ];

console.log(valorStock(productos1));
