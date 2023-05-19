let periferico = [], estado = [];
let contadorPerifericos, contadorDanados, contadorBuenos;
let porcentajeDanados;

contadorPerifericos = 0;
contadorDanados = 0;
contadorBuenos = 0;

let cantidadPerifericos = prompt("Ingrese la cantidad de periféricos: ");

for (let i = 0; i < cantidadPerifericos; i++) {
    periferico[i] = prompt("Ingrese el nombre del periférico: " + (i + 1) + " : ");
    estado[i] = prompt("Ingrese el estado del periférico: " + (i + 1) + "(dañado/bueno): ");
    
    contadorPerifericos++;
    
    if (estado[i] === "dañado") {
        contadorDanados++;
    } else {
        contadorBuenos++;
    }
}

porcentajeDanados = (contadorDanados * 100) / contadorPerifericos;

console.log("El porcentaje de periféricos dañados es: " + porcentajeDanados + "%");
console.log("Los periféricos que están funcionando bien son: ");

if (contadorBuenos === 0) {
    console.log("No hay periféricos funcionando bien.");
} else {
    for (let i = 0; i < cantidadPerifericos; i++) {
        if (estado[i] === "bueno") {
            console.log(periferico[i]);
        }
    }
}