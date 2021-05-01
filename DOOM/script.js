//AGREGAR UN ELEMENTO
/*const body = document.body
const div = document.createElement('div')
div.innerText = "Hello world"
div.textContent = "Hello world 2"

body.append(div);*/

//EXTRAER UN ELEMENTO
/*const div = document.querySelector('div')

console.log(div.textContent);
console.log(div.innerText);

//MODIFICAR EL HTML//

div.innerHTML = "<strong>Hello world</strong>"

const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanbye = document.querySelector('#bye');

//Eliminar un elemento desde JS
spanbye.remove()       //se puede agregar de nuevo con append

////Acceder a un atributo
console.log(spanHi.getAttribute('id')); //extreae un atributo en consola

////Cambiar el valor de un atributo
console.log(spanHi.setAttribute('id', 'newHello'));

////Eliminar un atributo
//spanHi.removeAttribute("id")

////Extraer data atributes
console.log(spanHi.dataset);

////Metodos para trabajar con clases
spanbye.classList.add('new-class'); //agrega una clase
//spanbye.classList.remove("new-class") //elimina una clase

///Para cambiar los estilos de un elemento
spanHi.style.backgroundColor = 'red';*/

/*OBJETOS EJERCICIO SIMPLE*/

var users = [
    {name: "Michael", age:37}, //users[0]
    {name: "John", age:30}, //users[1]
    {name: "David", age:27} //users[2]
];

console.log(users[1]["age"])
console.log(users[0]["name"])

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
for(var i in users){
  console.log(users[i]["name"],'=',users[i]["age"])
}

//¿Cómo harías para imprimir el nombre de los mayores de edad?

for(var i in users){
  if(users[i]["age"]>21){
    console.log(users[i]["name"])
  }
}



