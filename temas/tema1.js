// Mensajes por consola y alert

// Quiero que esto sea un comentario (Ctrl + ])
// console.log("Mensaje por consola");
// alert("Mensaje por alert (ya no debe usarse!).");


// Definición de variables, formas y sintaxis

// Nico G dice que HTML es un lenguaje de programacion.
// A Andrea le gusta el chocolate.
// Jonas tiene 21.
// Fernanda se acuerda de las etiquetas de HTML h1, p
// Fernanda no se acuerda de las etiquetas h2, h5, div, section, article

// Lo definido con "let" puede variar.
// let definicionNicoG="HTML es un lenguaje de programación";

// Lo definido con "const" no va a variar (OJO! si es un objeto igual lo defino con cost y ahi SI puede variar)
// const andreaLeGustaElChocolate=true;

// Lo definido con "var" puede variar, entonces, cual es la diferencia con let? Que con var los valores existen durante toda la vida de la aplicacion, con let puedo achicar el ambito de accion. 
// var edadDeJonas = 21;

// Siempre debo usar camelCase para los nombres de las variables, las constantes se definen con mayusculas.

// String
// let texto="Esto es una variable string";
// let etiqueta1="p"
// let etiqueta2="h1"


// Number
// let edad=5;


// Boolean
// let verdaderoOFalso=true;


// Array o arreglos o listas
// const lista =["h1", "p"]


// Object
// const manzana ={
// 	"color":"rojo",
// 	"forma":"redonda",
// 	"sabor": "manzana"
// }


// 1) Defina una variable sin asignarle ningún valor.

// let valor;
// console.log(valor);

// A la variable del enunciado anterior, asignele el valor "cinco".
// valor = "cinco";

// Diferencia entre "cinco", "5" y 5 (los tipos/ valores son diferentes)
// let prueba1 = valor + 1;
// console.log(prueba1);

// let concatenacion = valor + " " + "es el valor";
// console.log(concatenacion);

// Muestre por consola la variable de los enunciados anteriores.
// console.log(valor);

// 2) Defina dos variables y asigne un valor del tipo number a elección a cada una.

// let var1 = 3;
// console.log("var1 original: "+var1)
// let var2 = 5;
// console.log("var2 original: "+var2)
// var2++;
// console.log("Valor de var2 despues del ++: "+var2)

// let var3 = var1 + var2;
// console.log("var1 + var2: "+var3)

// console.log("var3 despues del ++: " + var3)

// var2++ es igual var2 = var2 +1
// var2++;

// Sume de uno en uno una variable incrementadola en 5

// let numero = 1;
// let numero2 = 10;

// console.log(`Texto con backticks ${numero + numero2}`)
// console.log("Texto con comillas dobles (o simples) y concatenacion " + numero)

// Para incrementar de a uno una variable del tipo number puedo utilizar el ++ (y para decrementarla el --)

// let numero = 1;
// console.log("Valor original: "+ numero)

// Incremento numero en 1
// numero++
// numero = numero + 1;
// console.log("Valor despues de un ++: "+ numero)


// Sume las variables del enunciado anterior y asigne el resultado a una tercera variable.
// let var3 = var1 + var2;

// Muestre por consola el resultado.
// console.log(var3)

// 3) Defina una constante y una variable con valores de tipo number a elección.

// const CONSTANTE = 1;
// console.log("CONSTANTE:" + CONSTANTE);

// let variable = 10;
// console.log("variable:" + variable);

// Sume el valor de la constante incrementado en 1 con el de la variable

// CONSTANTE = CONSTANTE + 1;
// let resultado = (CONSTANTE + 1) + variable
// console.log("Resultado 1 " + resultado);

// Ahora multiplique el valor de la variable por 10, y luego, sume nuevamente el valor de la constante con el de la variable.

// resultado = (variable*10) + CONSTANTE
// console.log(`Resultado 2 ${resultado}`);

// Finalmente, asigne cada uno de los resultados de las operaciones y muestrelos por consola.

// 4) Compare el número 1 y 2 e indique en formato booleano si son iguales o no.

// 5) Compare 5 y "5" e indique si son iguales en formato booleano, a su vez, compare "5" con 5 haciendo la misma operación.

// 6) Compare la igualdad 5 y "5" de una manera que el resultado sea false.

// 7) Compare si 5 y 5 son desiguales.

// 8) Declare una variable booleana, invierta su valor y muestrela por consola.

// 9) Compare si 10 es menor que 100, y al mismo tiempo, si 100 es menor que 10. Muestre el resultado en formato booleano por consola.

// 10) Compare si 10 es menor que 100, y a su vez, si 100 es menor que 1, si uno de las dos comparaciones es cierta, el resultado debe ser cierto. Muestre el resultado en formato booleano por consola.