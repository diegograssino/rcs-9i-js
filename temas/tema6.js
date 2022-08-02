// nota1 = 7;
// nota2 = 10;
// nota3 = 8;

// const promedio = (nota1+nota2+nota3)/3;

// console.log(
//   'El promedio del alumno 1 es: ' + promedio
// );

// alumno2Nota1=5;
// alumno2Nota2=6;
// alumno2Nota3=8;

// const promedio2= (alumno2Nota1+alumno2Nota2+alumno2Nota3)/3;

// console.log("El promedio del alumno 2 es: "+promedio2)

// alumno3Nota1 = 10;
// alumno3Nota2 = 10;
// alumno3Nota3 = 10;

// const promedio3 =
//   (alumno3Nota1 + alumno3Nota2 + alumno3Nota3) /
//   3;

// console.log(
//   'El promedio del alumno 3 es: ' + promedio3
// );

// function promedioAlumno(cheddar) {
//   let sumaDenotas = 0;
//   for (let i = 0; i < cheddar.length; i++) {
//     sumaDenotas = sumaDenotas + cheddar[i];
//   }
//   const promedio = sumaDenotas / cheddar.length;

//   return promedio;
// }

// const promedio = 1;
// console.log(promedio);
// promedioAlumno(7, 10, 8);
// promedioAlumno(5, 6, 8);
// promedioAlumno(10, 10, 10);

// console.log(promedio);

// console.log(promedioAlumno([5,5,5,5,10]))

// const valorDelInput = prompt("Ingrese n valor")

// const papaFritas = [5, 5, 5, 5, 10];

// const promedio = promedioAlumno(papaFritas);
// console.log(promedio);

// 1- Modificar, 2-Devolver el valor modificado, 3-Devuelve un valor

// function name(params) {}

//  funcionFlechaConNombre (parametros) => {
// Bloque de código (Arraow Function)
//  }

// (parametros) => {
// Bloque de código
//  }

// arrayDeNumeros = [1, 2, 3];

// arrayDeNumeros.forEach(function (numero)
// 	{
//  Bloque de codigo
// 	}
// )
// arrayDeNumeros.forEach(numero=> Bloque de codigo);

// const holaRolling = () =>  console.log("Hola Rolling");

// Hacer una funcion que nos sirva de calculadora, o sea que haga las operaciones de suma, resta, division y multiplicacion de dos operandos.

const calc = (num1, num2, operation) => {
	if (!num1 || !num2) {
		return console.error("Debe ingresar los valores")
	}

  switch (operation.toUpperCase()) {
    case 'ADD':
      return num1 + num2;
    case 'SUB':
      return num1 - num2;
    case 'DIV':
      return num1 / num2;
    case 'MUL':
      return num1 * num2;

    default:
      return console.error(
        'Operación inválida'
      );
  }
};


let resultado = calc(1,1,"add")

console.log(resultado)