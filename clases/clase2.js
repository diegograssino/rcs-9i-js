// 1)
// Una en uno solo los strings "La vida es" y "bella", muestre el resultado por consola y con un alert.

// let string1 = "End of passion play, crumbling away";
// let string2 = "I'm your source of self-destruction"
// let string3 = "Veins that pump with fear";

// let string123 = string1 + " " + string2 + " " + string3;
// console.log(string123)

// console.log(string1+ " " +string2+ " " + string3)

// console.log("End of passion play, crumbling away" + " " +"I'm your source of self-destruction"+ " "+ "Veins that pump with fear")

// Ahora utilice template literals para hacer lo mismo.

// let string1 = "End of passion play, crumbling away";
// let string2 = "I'm your source of self-destruction"
// let string3 = "Veins that pump with fear";

// let string123= `${string1} ${string2} ${string3}`
// console.log(string123)

// Lleve una cadena de caracteres en minuscula a mayusculas.

// let minusculas = "metallica";
// let mayusculas = minusculas.toUpperCase();
// toUpperCase DEVUELVE un nuevo string, NO MODIFICA la variable.

// Las tres maneras generan el mismo resultado
// console.log(mayusculas);
// console.log(minusculas.toUpperCase());
// console.log("metallica".toUpperCase());

// Lleve una cadena de caracteres en mayúscula a minúsculas.

// let mayusculas = "METALLICA";
// console.log(mayusculas.toLowerCase())

// Indique el largo de una cadena de caracteres ingresada con prompt y muestre el resultado con un alert.

// Sin prompt y alert
// let string1 = "End of passion play, crumbling away";
// console.log(string1.length)

// Con prompt y alert
// alert("Ganaste un Iphone!")

// let string2 = prompt("Ingrese una palabra:")
// console.log(string2)
// alert(string2.length)

// let inputNombre = ""
// let inputApellido= "Perez"
// let inputEmail = ""

// let llenoAlgunCampo = (inputNombre.length>0) || (inputApellido.length>0) || (inputEmail.length>0)

// let llenoTodosLosCampos = (inputNombre.length>0) && (inputApellido.length>0) && (inputEmail.length>0)

// console.log(llenoTodosLosCampos)

// Si LlenoTodosLosCampos = true, entonces que ingrese a la aplicacion, sino, si LlenoAlgunCampo = true mostrar error con lo que falta, y sino, Mostrar error que falta todo.

// Extraiga el 5to caractér del string "SILENCIOSOS"
// let nombre = prompt ("Ingrese un nombre: ")

// let caracterAExtraer = prompt("Que caracter de SILENCIOSOS desea extraer?")
// alert("La inicial del nombre es " + nombre.charAt(0))

// Del mismo string, extraiga las últimas dos letras.

// 3)
// Truncar un número no entero.
// let numero = 5.12;
// console.log(Math.floor(numero))

// Redondear al más cercano un número no entero
// let numeroRedondeado = Math.round(numero)
// console.log(numeroRedondeado)

// Devuelva el máximo valor de 5 variables (1, 5, 100, 2, 10)
// let var1 = prompt("Ingrese un número")
// let var2 = prompt("Ingrese un número")
// let var3 = prompt("Ingrese un número")
// let var4 = prompt("Ingrese un número")
// let var5 = prompt("Ingrese un número")

// let varMax = Math.max(var1, var2, var3, var4, var5)
// let varMin = Math.min(var1, var2, var3, var4, var5)

// let varMaxNumeros = Math.max(1, 5, 1000, 2, 10)

// alert("El mayor es: " + varMax)
// alert("El menor es: " + varMin)

// console.log(varMaxNumeros)

// Con las mismas variables, devuelva el mínimo

// TAREA
// Ahora calcule la raiz cuadrada de 12

// TAREA
// Calcule el resultado de 8 elevado a la 10ma potencia

// Sume el número 10 con uno generado aleatoriamente

// let numeroAleatorio =  Math.random()
// console.log(numeroAleatorio)

// let max = prompt("Ingrese el numero aleatorio maximo: ")

// let numeroAleatorioCustom = Math.floor(Math.random() * max)

// console.log("El número aleatorio del 1 al " + max + " es: " + numeroAleatorioCustom)

// A ese número redondearlo a dos decimales

//

// 4)
// Dado un número, indicar si ese número es mayor a 10.

// let numero = 11;
// let numero = prompt('Ingrese un número: ');

// if (numero > 10) {
// console.log(numero + ' es mayor a 10.');
//   alert(numero + ' es mayor a 10.');
// }

// Dado un número, indicar si ese número es menor o igual a 10.

// let numero = 20;

// let numero = prompt('Ingrese un número: ');

// if (numero <= 10) {
//   alert(numero + ' es menor o igual a 10.');
// }

// if (numero > 10) {
//   alert(numero + ' es mayor a 10.');
// }

// Dado un número, indicar si ese número es par.

// let numero = 6;

// if (numero % 2 === 0) {
//   console.log('El número es par');
// }

// if (numero % 2 !== 0) {
//   console.log('El número es impar');
// }

// Dado un número, indicar si ese número es impar.

// Ante un valor ingresado, indicar si tiene contenido.

// let numero = '';

// console.log(numero.length);

// if (numero.length) {
//   console.log('numero tiene contenido.');
// }

// if (!numero.length) {
//   console.log('numero no tiene contenido.');
// }

// 5)

// Dado un número, indicar si ese número es mayor o menor o igual
// a 10.

// let numero = prompt('Ingrese un número: ');

// if (numero > 10) {
//   alert('Es mayor a 10');
// } else if (numero < 10) {
//   alert('Es menor a 10');
// } else {
//   alert('Es igual 10');
// }

// if (numero > 10) {
//   alert('Es mayor a 10');
// }
// if (numero < 10) {
//   alert('Es menor a 10');
// }
// if ((numero = 10)) {
//   alert('Es igual a 10');
// }

// Dado un número, indicar si ese número es par o impar.

// Dados dos números, indicar cual es el mayor.

// Ante un valor ingresado, indicar si tiene o no contenido.

// 6)

// Dados dos números, indicar cual es mayor o si son iguales.

// let numero1 = prompt(
//   'Ingrese el primer número: '
// );
// let numero2 = prompt(
//   'Ingrese el segundo número: '
// );

// if (numero1 === numero2) {
//   alert('Son iguales');
// } else if (numero1 > numero2) {
//   alert('El primer número es mayor');
// } else {
//   alert('El segundo número es mayor');
// }

// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.

// Prompt siempre me devuelve un string
// let nota1string = prompt('Ingrese primer nota: ');

// let nota1 = parseFloat(nota1string);

// let nota2 = parseFloat(
//   prompt('Ingrese segunda nota: ')
// );
// let nota3 = parseFloat(
//   prompt('Ingrese tercer nota: ')
// );

// let promedio = (nota1 + nota2 + nota3) / 3;

// console.log(promedio);

//TAREA
// 7)
// Crear un algoritmo que pida al usuario el diámetro de una rueda
// y su grosor (en metros) y realice las siguientes operaciones:

// a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje
//“La rueda es para un vehículo grande”. Si es menor o igual a 1.4
// pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para
// un vehículo mediano”. Si no se cumplen ninguna de las condiciones
// anteriores debe mostrarse por pantalla el mensaje “La rueda es
//para un vehículo pequeño”.

// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4,
// ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un
// grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para
// esta rueda es inferior al recomendado”

// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.

// let mes = 20;

// if (mes === 1) {
//   console.log('El mes es Enero');
// } else if (mes === 2) {
//   console.log('El mes es Febrero');
// } else if (mes === 3) {
//   console.log('El mes es Marzo');
// } else if (mes === 4) {
//   console.log('El mes es Abril');
// } else if (mes === 5) {
//   console.log('El mes es Mayo');
// } else if (mes === 6) {
//   console.log('El mes es Junio');
// } else if (mes === 7) {
//   console.log('El mes es Julio');
// } else if (mes === 8) {
//   console.log('El mes es Agosto');
// } else if (mes === 9) {
//   console.log('El mes es Septiembre');
// } else if (mes === 10) {
//   console.log('El mes es Octubre');
// } else if (mes === 11) {
//   console.log('El mes es Noviembre');
// } else if (mes === 12) {
//   console.log('El mes es Diciembre');
// } else {
//   console.log('No corresponde a ningún mes');
// }

// TAREA

// Solicitar un numero de día y mostrar el nombre del día

// 8)
// TAREA
// Hacer ahora con Switch:
// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.

// Hacer ahora con Switch:
// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.

// let mes = 6;

// switch (mes) {
//   case 1:
//     console.log('Enero');
//     break;
//   case 2:
//     console.log('Febrero');
//     break;
//   case 3:
//     console.log('Marzo');
//     break;
//   case 4:
//     console.log('Abril');
//     break;
//   case 5:
//     console.log('Mayo');
//     break;
//   case 6:
//     console.log('Junio');
//     break;
//   case 7:
//     console.log('Julio');
//     break;
//   case 8:
//     console.log('Agosto');
//     break;
//   case 9:
//     console.log('Septiembre');
//     break;
//   case 10:
//     console.log('Octubre');
//     break;
//   case 11:
//     console.log('Noviembre');
//     break;
//   case 12:
//     console.log('Diciembre');
//     break;

//   default:
//     console.log('No corresponde a un mes.');
//     break;
// }

// TAREA
// Hacer ahora con Switch:
// Solicitar un numero de día y mostrar el nombre del día

// TAREA
// Escribe un programa que responda a un usuario que quiere comprar
// un helado en una conocida marca de comida rápida cuanto le costará
// en función del topping que elija. Si no hay concidencias debe
// informarlo.
// El helado sin topping cuesta $100.
// El topping de oreo cuesta $150.
// El topping de KitKat cuesta $175.
// El topping de brownie cuesta $175.

// TAREA
// Solicitar al usuario un modelo de auto que desea comprar e
// TAREA
// informarle cuánto cuesta. Si no hay concidencias debe informarlo.
