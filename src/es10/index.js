//ECMAScript10 Array.flat() que nos permite aplanar un array y entenderlo como un array unidimensional.
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));  //Muestra el arreglo por niveles, desde 0 hasta los que se tengan en profundidad

//array.flatMap() Nos permite mapear cada elementop despues pasarle una funcion y aplanarlo

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2])); //Nos permite mapear cada elementop despues pasarle una funcion y aplanarlo

//.trimStart() Eliminar espacios en blanco al comienzo de un string

let hello = "   Hello World   ";
console.log(hello);
console.log(hello.trimStart());  //Elimina espacios en blanco al comienzo de un string

//.trimEnd() Eliminar espacios en blanco al final de un string

let hello2 = "Hello World      ";
console.log(hello.trimEnd());  //Elimina espacios en blanco al final de un string

//Optional Catch Binding Podemos pasar de forma opcional del parametro de error al valor de catch

try
{

}
catch  //No para el valor de error en este catch
{
    error
}

// Transformar arreglos a objetos
let entries = [['name', 'oscar'], ['age', 32]];
console.log(Object.fromEntries(entries)); //Convierte un arreglo de arreglos a un objeto

//Objeto de tipo simbolo que permite acceder a una descripcion

let mySimbl = "My symbol";
let symbol = Symbol(mySimbl);
console.log(symbol.description); //Muestra la descripcion del simbolo
