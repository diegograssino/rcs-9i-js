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

// let numero = prompt("Ingrese su número");

// if (numero > 10) {


// Dado un número, indicar si ese número es menor o igual a 10.

// let numero = prompt("Ingrese un número:");


// Dado un número, indicar si ese número es par.

// let numero = prompt("Ingrese un número: ");


// Dado un número, indicar si ese número es impar.

// let numero = prompt("Ingrese un número: ");


// Ante un valor ingresado, indicar si tiene contenido.

// let valor = prompt("Ingrese un valor:");


// 5)

// Dado un número, indicar si ese número es mayor o menor o igual 
// a 10.


// Dado un número, indicar si ese número es par o impar.

// let numero = prompt("Ingrese un número");


// Dados dos números, indicar cual es el mayor.


// Ante un valor ingresado, indicar si tiene o no contenido.

// TAREA!

// 6)

// Dados dos números, indicar cual es mayor o si son iguales.



// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.

// Crear un algoritmo que pida al usuario el diámetro de una rueda
// y su grosor (en metros) y realice las siguientes operaciones:


// a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje
//“La rueda es para un vehículo grande”. Si es menor o igual a 1.4
// pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para
// un vehículo mediano”. Si no se cumplen ninguna de las condiciones
// anteriores debe mostrarse por pantalla el mensaje “La rueda es 
//para un vehículo pequeño”.

// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.

// Solicitar un numero de día y mostrar el nombre del día


// 7)

// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4,
// ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un
// grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para
// esta rueda es inferior al recomendado”


// 8)

// Hacer ahora con Switch:
// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.


// Hacer ahora con Switch:
// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.

// Hacer ahora con Switch:
// Solicitar un numero de día y mostrar el nombre del día

// Escribe un programa que responda a un usuario que quiere comprar
// un helado en una conocida marca de comida rápida cuanto le costará
// en función del topping que elija. Si no hay concidencias debe
// informarlo.
// El helado sin topping cuesta $100.
// El topping de oreo cuesta $150.
// El topping de KitKat cuesta $175.
// El topping de brownie cuesta $175.

// Solicitar al usuario un modelo de auto que desea comprar e
// informarle cuánto cuesta. Si no hay concidencias debe informarlo.