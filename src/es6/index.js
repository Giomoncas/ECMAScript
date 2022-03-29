function newFunction(name, age, country)  //Asi se crea una función normalmente
{
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//EcmaScript 6

function newFunction2(name = 'Oscar', age = 32, country = 'MX')  //Asi se crea una función con parametros por default
{
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 22, 'CO');

//Template Literals

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;  //Concatenar sin usar plantillas literales
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;  //Concatenar con plantillas literales
console.log(epicPhrase2);

let lorem = "Si naces pobre no es tu culpa \n" + "si mueres pobre si es tu culpa";  //Asi se pasaba a la siguiente linea de codigo antes de em6 o multilinea
console.log(lorem);

//ECMAScript6
let lorem2 = `Otra frase Epica que necesitamos
y las frases epicas son cool`;  //Esta es la forma de hacer texto multilinea en em6
console.log(lorem2);


//Destructuracion de objetos

let person = {
    "Name": "Gabriel",
    "Age": 55,
    "Country": "CO"
}
console.log(person.Name, person.Age, person.Country);

//EM6
let {Name, Age, Country} = person;  //Asi se hace la destructuracion de objetos
console.log(Name, Age, Country);

//Spread Operator (Operador de Propagacion)
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David', ...team1, ...team2];  //Asi se hace la propagacion de arrays
console.log(education);

//Uso de variables con let y const

{
    var globalVar = "Global Var";  //Esta es una variable global que si es accesible
}

{
    let globalLet = "Global Let";  //Esta es una variable local que no es accesible por fuera de este bloque de codigo
}

console.log(globalVar);
console.log(globalLet);

const a = "b"; //Esta es una constante que no puede ser modificada
a = "a"; 
console.log(a);  //Aca muestra un error porque esta asignando un valor a una variable que es constante

//Propiedad de objetos mejorada en ES6

let nombre = "Giovanni";
let edad = 34;

obj = {name: nombre, age: edad};  //Asi se crea un objeto con propiedades

//ECMAScript6
obj2 = {nombre, edad};  //Asi se crea un objeto con propiedades mejoradas en em6
console.log(obj2);

//Funciones tipo flecha (Arrow Functions)

const names = [
    {name: 'Giovanni', age: 34},
    {name: 'Erica', age: 31},
    {name: 'Camila', age: 18},
    {name: 'Julian', age: 22}
];

let listOfNames = names.map(function(item) {  //Asi se crea una funcion con parametros por default
    console.log(item.name);
});
console.log(listOfNames);

let listOfNames2 = names.map(item => console.log(item.name));  //Asi se crea una funcion flecha
console.log(listOfNames2);

const listOfNames3 = (name, age, country) => {  //Asi se crea una funcion flecha con parametros por default
    console.log(name, age, country);
};

const listOfNames4 = name => {
    console.log(name);
  };      //Asi se crea una funcion flecha con parametros por default

const square = num => num * num;  //Asi se crea una funcion flecha con parametros por default

//Promesas para trabajar el asincronismo

 const helloPromise = () => {
   return new Promise((resolve, reject) => {
     if(true) {
       resolve('Hey!');
     } else {
       reject('Ups!');
     }
   } );
}

helloPromise()
 .then(response => console.log(response)) 
 .catch(error => console.log(error))

 //Clases en ES6

 class calculator
 {
     constructor()
     {
         this.valueA = 0;
         this.valueB = 0;
     }

     sum(valueA, valueB)  //Metodos creados en la clase
     {
         this.valueA = valueA;
         this.valueB = valueB;
         return this.valueA + this.valueB;
     }
 }

 const calc = new calculator();
 console.log(calc.sum(2,2));

 //Modulos import y export

 //El export se coloca en el archivo de donde se requiere traer la informacion

 import { hello } from './module';  //Asi se importa un modulo con el directorio especifico
 console.log(hello());


//Generators em ES6

function* helloWorld()  //Asi se crea una funcion generator con el simbolo de asterisco
{
    if(true) {
        yield 'Hello, ';  //Permite retornar algo de una funcion
    }
    if(true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();  //Asi se crea una variable con la funcion generator
console.log(generatorHello.next().value);  //Asi se imprime el valor de la funcion
console.log(generatorHello.next().value); 
console.log(generatorHello.next().value); 

