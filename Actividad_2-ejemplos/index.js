// Ejemplos de javascript

// Comentario de linea
/*
Comentario de bloque 
*/

// Imprimir en consola
console.log("Hola mundo");
console.log("---------");
// Variables (Reciben cualquier tipo de dato)
const edad = 55;
let nombre = "Juan";
const esEstudiante = false;
const altura = 1.70;
const semestres = []; //List - Array

//Diccionarios -> objeto -> JSON (Javascript objet notation )
const materiaPreferida = {nombre: "calculo", id:0};

const universidad = null; //nulo 
const carrera = undefined; //indefinido 

//Const -> no se puede actualizar el valor, let -> si se le puede actualizar el valor

//Funciones
console.log("El tipo de dato de nombre es: "+typeof nombre);
console.log("El tipo de dato de edad es: "+typeof edad); //Tipo de variable
console.log("-------Conversiones-----------");
const precioMatricula = "5000000.5"
console.log("Entero: "+parseInt(precioMatricula));
console.log("Float: "+parseFloat(precioMatricula));
console.log("------- == --------"); //compara el valor no importa el tipo
console.log("Doble igual: ","45" == 45);
console.log("------- === --------"); //compara el valor y el tipo
console.log("Doble igual: ","45" === 45);

console.log("-------Concatenacion-----------");
console.log(nombre + "" +altura);
console.log(`${nombre} ${altura}`);

console.log("-------Operador ternario-----------"); // (exp ? verdadero : falso)
console.log(edad > 18 ? "Es mayor de edad" : "Es menor de edad");
let condition = edad >18;
if (condition) {};
if (condition) {} else {};

console.log("-------Switch-----------");
const dia = "LUNES";
switch (dia){
    case "LUNES":
        console.log("Lunes");
        break;
    case "MARTES":
        console.log("Martes");
        break;
    default:
        console.log("NO ES VALIDO");
        break;
}
console.log("-------Ciclos-----------");
for (let index = 0; index < 10; index++) {
    
}

for (const key in materiaPreferida) {
    console.log(key);
}
for (const item of [1,2,3]) {
    console.log(item);
}
[1,2,3].forEach(element => {
    console.log(element);
});

console.log("-------Funciones-----------");
// Funcion clasica js
function imprimirNombre(nombre) {
    console.log(nombre);    
}
// Invocar funcion
imprimirNombre(nombre)

// Funcion a una variable 
const imprimirNombreApellido = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`);
}
imprimirNombreApellido(nombre, "hoyos")
// SCOPE 
const crearNombreCompleto = (nombre, apellido) => {
    console.log("--Global Scope");
    console.log(nombre, apellido);
    let name = nombre
    if (nombre.length > 3) {
        let name = nombre[0] + "" + apellido
        console.log(name);
    }

}
const botoneshtml = document.getElementsByTagName('button')
console.log(botoneshtml);
crearNombreCompleto(nombre, "hoyos");