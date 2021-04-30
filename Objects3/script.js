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

function filtrandoPropiedades(arrayObjetos, arrayStrings) {
  let newArray = [];
  for (let i = 0; i < arrayObjetos.length || i < arrayStrings.length; i++) {
    for (let prop in arrayObjetos[i]) {
      if (arrayStrings[i] === prop) {
        newArray.push(arrayObjetos[i][prop]);
      }
    }
  }
  return newArray;
}

objetos = [
  { forma: 'circulo', color: 'verde', tamaño: 3 },

  { forma: 'triangulo', color: 'amarillo', tamaño: 4 },

  { forma: 'cuadrado', color: 'celeste', tamaño: 2 },

  { forma: 'trapecio', color: 'fucsia', tamaño: 7 },

  { forma: 'estrella', color: 'violeta', tamaño: 1 },
];

propiedades = ['color', 'forma', 'tamaño', 'forma', 'color'];

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

function pluck(arrayObjetos, propiedad) {
  let newArray = [];
  for (let i = 0; i < arrayObjetos.length; i++) {
    for (let prop in arrayObjetos[i]) {
      if (propiedad === prop) {
        newArray.push(arrayObjetos[i][prop]);
      }
    }
  }
  return newArray;
}

let productos = [
  { nombre: 'TV LCD', precio: 100 },
  { nombre: 'Computadora', precio: 500 },
];

//console.log(pluck(productos, 'precio'));

/*******EJERCICIO 3*******/
// Valor Stock
// Escribí una función valorStock que tome un arreglo de productos como parámetro.
// La función debe devolver un nuevo arreglo con objetos que tengan el nombre de cada producto y el valor total del stock:

// Ejemplo:
// var productos = [{nombre: 'TV LCD', precio: 100, stock: 50}, {nombre: 'Computadora', precio: 500, stock: 50}, {nombre: 'Iphone', precio: 1000, stock: 10}]
// valorStock (productos) // Debe retornar [{TV LCD: 5000}, {Computadora: 25000}, {Iphone: 10000}]

function valorStock(arrayProductos) {
  let newArray = [];

  for (let i = 0; i < arrayProductos.length; i++) {
    let objeto = {};
    objeto[arrayProductos[i]['nombre']] =
      arrayProductos[i]['precio'] * arrayProductos[i]['stock'];
    newArray.push(objeto);
  }

  return newArray;
}

var productos1 = [
  { nombre: 'TV LCD', precio: 100, stock: 50 },
  { nombre: 'Computadora', precio: 500, stock: 50 },
  { nombre: 'Iphone', precio: 1000, stock: 10 },
];

//console.log(valorStock(productos1));

/*******EJERCICIO 4*******/
/* Continentes.
 
 A) En esta parte del ejercicio deberás definir una función que tomará un arreglo de objetos 
 con la información (nombre, población y superficie) de los 7 continentes y devolverá otro 
 arreglo de objetos que tendrán con el nombre del continente como key y la densidad de población 
 como value.
Tené en cuenta que la densidad poblacional se define como la relación población/superficie.
 Además, por fines prácticos, trabajarás sin unidades y solo con números.
  Tampoco tendrás que preocuparte por la cantidad de decimales.
 
 continentes = [{nombre: 'asia', superficie: 43810000, poblacion: 3879000000}, 
 {nombre: 'america', superficie: 42330000, poblacion: 910000000},
  {nombre: 'africa', superficie: 30370000, poblacion: 922011000},
   {nombre: 'antartida', superficie: 13720000, poblacion: 1000},
    {nombre: 'europa', superficie: 10180000, poblacion: 731000000},
    {nombre: 'oceania', superficie: 8720710, poblacion: 27000000}]
 
A continuación un ejemplo:
 
      calcularSuperficie(continentes) retornará [{asia: 88.54}, {america: 21,49},
       {...}, {...}, {...}, {...}, {...}]
 
 B) En esta parte deberás refactorear la función para que en vez de devolver un arreglo 
 de objetos devuelva un solo objeto con toda la información:
 
  calcularSuperficie(continentes) devuelve {asia: 88.54, america: 21.49, ...}
 */

function Continentes(arrayObjetos) {
  let newArray = [];
  let continente = {};
  for (let i = 0; i < arrayObjetos.length; i++) {
    continente[arrayObjetos[i]['nombre']] = (
      arrayObjetos[i]['poblacion'] / arrayObjetos[i]['superficie']
    ).toFixed(2);
  }
  //newArray.push(continente);
  return continente;
}

continentes = [
  { nombre: 'asia', superficie: 43810000, poblacion: 3879000000 },
  { nombre: 'america', superficie: 42330000, poblacion: 910000000 },
  { nombre: 'africa', superficie: 30370000, poblacion: 922011000 },
  { nombre: 'antartida', superficie: 13720000, poblacion: 1000 },
  { nombre: 'europa', superficie: 10180000, poblacion: 731000000 },
  { nombre: 'oceania', superficie: 8720710, poblacion: 27000000 },
];

// console.log(Continentes(continentes));

/*******EJERCICIO 5*******/

/*Deben crear una función llamada doubleFilter que reciba como parámetro un arreglo de objetos, un continente, y un número de población. La función filtra el arreglo solo con los países que sean del continente pasado por parámetro, y además, los que su población sea mayor o igual a la del ultimo parámetro. Debera devolver un arreglo con los nombres de los paises de los objetos que cumplan con la condicion.*/


function doubleFilter(arrayObjs,continente,poblacion){
  let paisesCumplen = [];
  for(let i = 0; i<arrayObjs.length; i++){
    if(arrayObjs[i]["continente"] === continente && arrayObjs[i]["poblacion"]>=poblacion){
      paisesCumplen.push(arrayObjs[i]["nombre"]);
    }
  }
  return paisesCumplen;

}


var paises = [
  {
    nombre: 'argentina',
    continente: 'sudamerica',
    poblacion: 40000000,
  },
  {
    nombre: 'brasil',
    continente: 'sudamerica',
    poblacion: 300000000,
  },
  {
    nombre: 'venezuela',
    continente: 'sudamerica',
    poblacion: 25000000,
  },
  {
    nombre: 'chile',
    continente: 'sudamerica',
    poblacion: 10000000,
  },
  {
    nombre: 'australia',
    continente: 'oceania',
    poblacion: 18000000,
  },
  {
    nombre: 'nueva zelanda',
    continente: 'oceania',
    poblacion: 8000000,
  },
  {
    nombre: 'china',
    continente: 'asia',
    poblacion: 1000000000,
  },
  {
    nombre: 'tailandia',
    continente: 'asia',
    poblacion: 32000000,
  },
  {
    nombre: 'vietnam',
    continente: 'asia',
    poblacion: 23000000,
  },
  {
    nombre: '‘españa',
    continente: 'europa',
    poblacion: 29000000,
  },
  {
    nombre: 'alemania',
    continente: 'europa',
    poblacion: 33000000,
  },
  {
    nombre: 'francia',
    continente: 'europa',
    poblacion: 65000000,
  },
  {
    nombre: 'portugal',
    continente: 'europa',
    poblacion: 4000000,
  },
  {
    nombre: 'grecia',
    continente: 'europa',
    poblacion: 12000000,
  },
];

console.log(doubleFilter(paises,'europa',5000000));

