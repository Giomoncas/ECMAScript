// Dinamic Import : Vamos a realizar importacion de algun elelemnto de forma dinamicoa para optimizar nuestro proyecto

const button = documemt.getElementById('btn');

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

// Manejo de BigInt

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise all Settled permite devolver una promesa que se resuelve todas las promesas dadas 

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3]).then(response => console.log(response));

//Gobal this que proporciona una forma estandar de acceder al valor global, acceder a los objetos desde las aplicaciones y no solo desde el navegador

console.log(window);
console.log(globalThis);

//Operador Nulo: un operador logico que nos devuelve su operando del lado derecho cuando el operador del lado izquierdo es nulo o indefinido y de lo contrario devuelve el operador del lado izquierdo

const fooo = null ?? "default string";  //operador nulo ??
console.log(fooo);

//opcional chaining: un operador que nos permite acceder a una propiedad de un objeto, pero si no existe la propiedad, no nos devuelve nada

const user = {};
console.log(user?.profile?.email); //opcional chaining

if (user?.profile?.email) {
    console.log("email");
}
else
{
    console.log("no email");
}