// Replace all

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Phyton"); //Solo encuentre el primer elemento y lo reemplaza
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Phyton"); //Encuentra todos los elementos y los reemplaza
console.log(replacedString2);

//Metodos privados que podemos utliizar en las clases

class Message 
{
    #show(val) //Con numeral se marca el metodo como privado para que solo se acceda dentro de la clase
    {
        console.log(val);
    };
}

const message = new Message();
message.show("Hola!");

//Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]).then(response => console.log(response));

//this.ref: Referencia de forma debil a un objeto

class AnyClass
{
    constructor(element)
    {
    this.ref = new WeakRef(element);
    }
}

// Operaciones de Asignacion Lógico

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //false

console.log(isTrue ||= isFalse); //true

console.log(isTrue ??= isFalse); //false