//ES9 Operador de reposo ...all

const obj = {
    name: "Giovanni",
    age: 34,
    country: "CO",
};

let {name, ...all} = obj; //Operador de reposo
console.log(name, all);

// Utilizar utilidades de propragacion (...nombre) vamos a unir uno o mas elementos de objetos a un nuevo objeto

const obj2 = {
    name: "Erica",
    age: 34,    
};

const obj3 = {
    ...obj2,
    country: "CO", 
};

console.log(obj3);

//Promise.finally nos permite saber cuando se ha terminado el llamado y ejecutar lineas de codigo

const helloWorld = () => {  //Promesa
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test Error'))
    });
}

//Agrupar bloques del regex y poder acceder a cada uno de ellos

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20'); //Pasarle una fecha al regex
const year = match[1];  //Acceder a los grupos del regex
const month = match[2];
const day = match[3];

console.log(year, month, day);









