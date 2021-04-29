/***********EJERCICIO 1***********/
/*1. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor del número y sus anteriores.

Ejemplo:
    arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
    arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]
*/ 


function arregloDeObjetos(num){
  let array = [];
  for(var i = 1; i<=num; i++){
    let objeto = {};             //crea un objeto vacio
    objeto["valor"] = i;      //agrega una propiedad al objeto y le da el valor de "valor", este lo iguala al iterador
    array.push(objeto);
  }
  return array;
}

//console.log(arregloDeObjetos(3));
  
/***********EJERCICIO 2***********/
/*14. Arreglo de objetos 
Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

Ejemplo:
arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]
*/

function arregloDeObjetos(num,string){
  let array = [];
  for(let i = 1; i<=num; i++){
    const objeto = {};
    objeto[string] = i;
    array.push(objeto);
  }
  return array;
}

//console.log(arregloDeObjetos(3, "chau"));


/***********EJERCICIO 3***********/

/*15. Única propiedad
Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string. 

Ejemplo: 
 var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]*/

function oneProperty(arrayObj,string){
  var array = [];
  for(let i = 0; i < arrayObj.length; i++){
      for(let j in arrayObj[i]){
        let obj = {};
        if(string === j){              
          obj[j] = arrayObj[i][j];
          array.push(obj);
        }
      }

    }
    return array; //nuevo array

}

var  arreglo = [ { name: 'lucas', edad: 20 }, { name: 'santi', edad: 22 } ]
//console.log(oneProperty(arreglo,'name'));


/***********EJERCICIO 4***********/

/*16. Guerra de palabras
 	Utils: 
 var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}

Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).

Ejemplo:
warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
warWord(“love”, “friendship”) debe retornar “friendship”
*/


function warWorld(stringOne, stringTwo){
    var abc = {

      a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,
      k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,
      t:20,u:21,v:22,w:23,x:24,y:25,z:26
    }

    let sum = sum2 = 0;
    
    //{letra:abc[letra]} => {key:value}   ANALOGIA PARA ACCEDER A UNA PROPIEDAD Y SU VALOR

    for(let i = 0; i<stringOne.length || i<stringTwo.length; i++){  //condicion para recorrer dos arreglos al mismo tiempo
      for(let letra in abc){
        if(stringOne[i] == letra){
            sum += abc[letra];
        }
        else if(stringTwo[i] == letra){
          sum2 += abc[letra];
        }
      }

    }
    if(sum>sum2){return stringOne;}
    else{return stringTwo;}
}

//console.log(warWorld("love", "friendship"));


/***********EJERCICIO 5***********/

/*17. Prefijos Telefónicos
	Utils:
var prefijos = [54, 55, 56, 57, 58]
var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
ejemplo : 

{
	54: “Argentina”,
	55: ”Brasil”,
	56: ”Ecuador”,
	57: ”Bolivia”
}


Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

Ejemplo: 
validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”
*/

function validarPrefijo(prefijoX){
  const objeto = {};
  var prefijos = [54, 55, 56, 57, 58]
  var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
  for(let i = 0; i<prefijos.length || i<paises.length; i++){
    objeto[prefijos[i]] = paises[i];
  }
 
  for(var i in objeto){
    if(prefijoX == i){
      return `Este número pertenece a ${objeto[i]}`;
    }
  }
  return `El ${prefijoX} no pertenece a nuestros paises`;
}

//console.log(validarPrefijo(55));

/***********EJERCICIO 6***********/

/* 18. {value: key} kelue: vay

Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.

	Ejemplo:
reverseKeys(344) debería devolver “error, input can’t be a number”
reverseKeys([ ]) debería devolver “error, input can’t be an Array”
reverseKeys(‘hola’) debería devolver “error, input can’t be a string”

var prueba = {
	nombre: ‘santi’,
	edad: 22,
	nacionalidad: ‘de otro planeta’,
	documento: 44444444
	
}
reverseKeys(prueba) debería devolver:
{
santi: ‘nombre’, 
edad: 22,
‘’de otro planeta”: nacionalidad,
 documento: 44444444
} */


function reverseKeys(objeto){
 
  if(typeof(objeto) != "object"){
    return `error, input can’t be a ${typeof(objeto)}`;
  }
  else if(Array.isArray(objeto)){
    return `error, input can’t be an array`;
  }
  else{
    let objeto2 = {};
    for(var i in objeto){
      if(typeof(objeto[i]) == "string"){
        objeto2[objeto[i]] = i; 
      }
      else{
        objeto2[i] = objeto[i]
      }
    }
    return objeto2;
  }
  
}

var prueba = {
	nombre: 'santi',
	edad: 22,
	nacionalidad: 'de otro planeta',
	documento: 44444444
}

console.log(reverseKeys(prueba));

