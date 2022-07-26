// Declaración

// let listaDeCompras = [
//   'Aceite',
//   'Harina',
//   'Arroz',
//   'Yerba',
//   'Jamón no Jabón',
//   'Azúcar',
//   'Fruta',
//   'Vino',
// ];

// console.log(listaDeCompras);

// let numerosPrimos = [
//   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
//   43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,
// ];

// console.log(numerosPrimos);

// let mezcla = ['maria', 1, 'juan', 2, true, null];

// console.log(mezcla);

// let tablero = [
//   'X',
//   '',
//   '',
//   '',
//   '',
//   'O',
//   '',
//   '',
//   '',
// ];
// console.log(tablero);

// Acceder a los distintos elementos por su indice

// let numerosPrimos = [
//   2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
//   43, 47, 53, 59, 61, 67, 71, 73, 79, 83,
// ];

// console.log(numerosPrimos[4]);

// Cantidad de elementos o largo

// console.log(numerosPrimos.length);

// Recorrer con for

// for (let i = 0; i < numerosPrimos.length; i++) {
//   const element = numerosPrimos[i];
//   console.log(element);
// }

// PUSH: Añadir elementos al final <-- MUTA EL ARRAY

// let animals = ['horses', 'dolphins'];
// console.log('Antes del push: ' + animals);

// animals.push('chickens', 'cats', 'dogs');
// console.log('Después del push: ' + animals);

// POP: Eliminar último elemento <-- MUTA EL ARRAY
// let animals = ['horses', 'dolphins'];
// console.log('Antes del pop: ' + animals);

// animals.pop();
// console.log('Después del pop: ' + animals);

// animals.pop();
// console.log(
//   'Después del segundo pop: ' + animals
// );

// animals.pop();
// console.log('Después del tercer pop: ' + animals);

// SHIFT: Eliminar primer elemento <-- MUTA EL ARRAY
// let animals = ['horses', 'dolphins'];
// console.log('Antes del shift: ' + animals);

// animals.shift();
// console.log('Después del shift: ' + animals);

// UNSHIFT: Agregar elementos al principio <-- MUTA EL ARRAY

// let animals = ['horses', 'dolphins'];
// console.log('Antes del unshift: ' + animals);

// animals.unshift('cats');
// console.log('Después del unshift: ' + animals);

// INDEXOF: Encontrar índice de un elemento por su valor (encuentra la primera coincidencia) <-- RETORNA VALOR

// let animals = ['horses', 'dolphins', 'horses'];
// console.log('Array: ' + animals);

// let i = animals.indexOf('horses');
// // console.log(i);

// let j = animals.indexOf('dolphins');
// // console.log(j);

// if (j !== -1) {
//   console.log('El index es ' + j);
// } else {
//   console.log('No existe en el array');
// }

// SPLICE: Eliminar elementos según su posición <-- MUTA EL ARRAY
// let animals = ['dogs', 'dolphins', 'horses'];
// console.log('Array antes del splice: ' + animals);

// animals.splice(1, 1);
// console.log(
//   'Array despues del splice: ' + animals
// );

// SLICE: Extraigo una parte del array <-- RETORNA NUEVO ARRAY

// let animals = ['dogs', 'dolphins', 'horses'];
// console.log('Array original: ' + animals);

// let animalsWithoutDogs = animals.slice(0, 2);
// console.log(
//   'Array original despues del slice: ' + animals
// );
// console.log(
//   'Array nuevo despues del slice: ' +
//     animalsWithoutDogs
// );

// SPLICE + INDEXOF: Borro por valor

// let animals = ['dogs', 'dolphins', 'horses'];
// console.log('Array original: ' + animals);

// animals.splice(animals.indexOf('horses'), 1);
// console.log(
//   'Array despues del splice con indexOf: ' +
//     animals
// );

// REVERSE: Invertir elementos <-- MUTA EL ARRAY

// SORT: Ordena elementos <-- MUTA EL ARRAY

// FILTER

// FOREACH: Recorre un array <-- NI MUTA, NI RETORNAR NUEVO ARRAY O VALORES

// MAP: Recorre un array y devuelve los que cumplean una condición <-- RETORNA NUEVO ARRAY
