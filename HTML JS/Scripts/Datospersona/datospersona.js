let codigo, nombre, sexo;
let edad;
let peso, sumaEdadMujeres, contadorMujeresSolteras;
let contadorHombresSolteros;

contadorHombresSolteros = 0;
sumaEdadMujeres = 0;
contadorMujeresSolteras = 0;

let cantidadPersonas = prompt("Ingrese la cantidad de personas:");

for (let i = 0; i < cantidadPersonas; i++) {
    codigo = prompt("Ingrese el código de la persona: " + (i + 1) + " : ");
    nombre = prompt("Ingrese el nombre de la persona: " + (i + 1) + " : ");
    edad = parseInt(prompt("Ingrese la edad de la persona: " + (i + 1) + " : "));
    sexo = prompt("Ingrese el sexo de la persona " + (i + 1) + " (M/F):");
    peso = parseFloat(prompt("Ingrese el peso de la persona: " + (i + 1) + " : "));
    estadoCivil = prompt("Ingrese el estado civil de la persona: " + (i + 1) + " : ");

    if (sexo === "M" && estadoCivil === "soltero" && peso >= 69) {
        contadorHombresSolteros++;
    }

    if (sexo === "F" && estadoCivil === "soltera" && peso >= 50) {
        sumaEdadMujeres += edad;
        contadorMujeresSolteras++;
    }
}

if (contadorMujeresSolteras > 0) {
    let edadPromedioMujeresSolteras = sumaEdadMujeres / contadorMujeresSolteras;
    console.log("La edad promedio de las mujeres solteras superior a 50 kilos es: " + edadPromedioMujeresSolteras);
}

console.log("La cantidad de hombres solteros con peso superior a 69 kilos es: ", contadorHombresSolteros);