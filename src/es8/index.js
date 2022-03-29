//ECMAScript8
//ES8: Object.entries()

const data = {
    frontend: 'Juan',
    backend: 'Pedro',
    design: 'Ana',
}

const entries = Object.entries(data);  //Convertir de objeto a array
console.log(entries);

//ES8: Object.values()

const data2 = {
    frontend: 'Pepito',
    backend: 'Juan',
    design: 'Viviana',
}

const values = Object.values(data2);  //Colocar los valores de las propiedades de un objeto en un arreglo
console.log(values);

//ES8 padStart() y padEnd()

const string = 'Hola';
console.log(string.padStart(7, 'Hi'));
console.log(string.padEnd(7, 'Bye'));

//ES8 Async-Await

const helloWorld = () => {  //Promesa para trabajar Async-Await
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    });
};

const helloAsync = async () => {  //Async-Await
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {  //Async-Await
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();

