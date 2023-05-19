let codigo = [], namee = [];
let tamañobytes, tiempo, sumaTiempo, contadorProcesos;
let contadorProcesosMenores;

sumaTiempo = 0;
contadorProcesos = 0;
contadorProcesosMenores = 0;

let cantidadProcesos = parseInt(prompt("Ingrese la cantidad de procesos: "));

for (let i = 0; i < cantidadProcesos; i++) {
    codigo[i] = prompt("Ingrese el código del proceso: " + (i + 1) + " : ");
    namee[i] = prompt("Ingrese el nombre del proceso: " + (i + 1) + " : ");
    tamañobytes = parseFloat(prompt("Ingrese el tamaño en bytes del proceso: " + (i + 1) + " : "));
    tiempo = parseFloat(prompt("Ingrese el tiempo de ejecución del proceso: " + (i + 1) + " : "));

    sumaTiempo += tiempo;
    contadorProcesos++;

    if (tamañobytes < 1500) {
        contadorProcesosMenores++;
    }
}

let tiempoPromedio = sumaTiempo / contadorProcesos;

console.log("El tiempo promedio de ejecución es: " + tiempoPromedio);
console.log("La cantidad de procesos con tamaño inferior a 1500 bytes es: " + contadorProcesosMenores);