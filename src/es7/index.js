//Uso de .includes para verificar la existencia de un elemento

let number = [1,2,3,4,5];

if(number.includes(2)){
    console.log('Si se encuentra el valor 2');
}else{
    console.log('No se encuentra el valor 2');
};

//Uso de la potencia

let base = 4;   
let exponente = 3;

let result = base ** exponente;//Elevar la base al exponente

console.log(result);