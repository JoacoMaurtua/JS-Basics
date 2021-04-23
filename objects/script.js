/*var dojo = {}; //objeto vacio
dojo = {
  name: 'Coding Dojo',
  number_of_students: 25,
  instructors: ['Andrew','Michael','Jay'],
  location: {                                //¡la propiedad puede incluso almacenar otro objeto!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}

console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location.state);
console.log(dojo["name"]);

//Cambiando una propiedad:
dojo.instructors = ['Andrew', 'Jhon','Maria'];

//Cambiando un objeto de una propiedad:
dojo.location.state = 'Florida';

//Agregando una nueva variable:
dojo.snacks = ['Fig Bars', 'Bagels', 'Popcorn', 'Apples'];


console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location.state, dojo.snacks);
console.log(dojo["name"]);


/**********Arrays de Objetos***********/

/*var glazedDonuts = [ //arrat de objetos

  {                              //glazedDonuts[0]
    frosting: 'glazed',
    style: 'cake',
    type: 'old fashioned',
    age: '45',
    time: 'minutes'
  },

  {                              //glazedDonuts[1]
    frosting: 'glazed',
    style: 'yeast raised',
    type: 'regular',
    age: '5',
    time: 'minutes'
  },

  {                              //glazedDonuts[2]
    frosting: 'glazed',
    style: 'yeast raised',
    type: 'jelly filled',
    age: '1',
    time: 'seconds'
  }
];


/*Entonces podrías ir a la tienda de donas y preguntar algo como: 
¿Puedo comprar la primera dona en el estante si esta ha estado fuera del horno 
por menos de 25 minutos? Esta conversación llevada a código sería algo como esto:*/ 

/*var purchase;

if(glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes' || glazedDonuts[0].time == 'seconds'){
  purchase = glazedDonuts[0];
}
else{
  console.log('sorry it has been out a bit longer');
}

/*Digamos que Mike decide usar todo lo que tiene en el bolsillo para comprarse cuantas donas pueda. 
Revisemos todas las donas disponibles para ver cuántas puede comprar.*/ 

/*var numPurchase = 0;
for (var donut in glazedDonuts){               //array para recorrer un objeto, donut es un iterador que recorre glazedDonuts
  console.log(glazedDonuts[donut].type);
  if((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds'){
    numPurchase++;
  }
  else {
    console.log('not this donut...');
   }
}
console.log(numPurchase);


/********Objetos construidos********/

function Persona(nombre, edad, sexo, pasatiempos) {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;
  this.pasatiempos = pasatiempos;
  this.hablar = function() {
    return `hola soy ${this.nombre}, y tengo ${this.edad} años`;
  };
}

const camilo = new Persona('camilo', 22, 'masculino', ['patinar', 'bailar']);

console.log(camilo)


