document.getElementById('calcularBtn3').addEventListener('click', function() {
    let cantidadNumeros = parseInt(prompt("Ingresa la cantidad de números a ingresar:"));

    while (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
        const opcion = prompt(
            "Cantidad inválida de números. ¿Deseas reingresar la cantidad de números? (S = sí / N = no)"
        );

        if (opcion && opcion.toUpperCase() === "N") {
            return; // Salir del programa
        }

        cantidadNumeros = parseInt(prompt("Ingresa la cantidad de números a ingresar:"));
    }

    let numeros = [];
    for (let i = 0; i < cantidadNumeros; i++) {
        let numero = parseInt(prompt("Ingresa el " + getOrdinal(i + 1) + " número:"));

        while (isNaN(numero)) {
            numero = parseInt(prompt("El valor ingresado no es un número válido. Ingresa el " + getOrdinal(i + 1) + " número:"));
        }

        numeros.push(numero);
    }

    let imparesInferiores750 = numeros.filter(function(numero) {
        return numero % 2 !== 0 && numero < 750;
    });

    let promedioImparesInferiores750 = 0;
    if (imparesInferiores750.length > 0) {
        promedioImparesInferiores750 = imparesInferiores750.reduce(function(a, b) {
            return a + b;
        }, 0) / imparesInferiores750.length;
    }

    let numerosEnRango120860 = numeros.filter(function(numero) {
        return numero > 120 && numero <= 860;
    });

    let productoNumerosEnRango120860 = numerosEnRango120860.length > 0 ? numerosEnRango120860.reduce(function(a, b) {
        return a * b;
    }) : "No hay números en el rango (120, 860] para multiplicar.";

    let menores75MayoresIguales86 = numeros.filter(function(numero) {
        return numero < 75 || numero >= 86;
    });

    let sumaMenores75MayoresIguales86 = menores75MayoresIguales86.reduce(function(a, b) {
        return a + b;
    }, 0);

    let numerosPares = numeros.filter(function(numero) {
        return numero % 2 === 0;
    });

    let porcentajeNumerosPares = numeros.length > 0 ? (numerosPares.length / numeros.length) * 100 : 0;

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = "<span style='color: #2a68b9;'>Promedio de impares inferiores a 750: </span><span style='color: white;'>" + promedioImparesInferiores750.toFixed(2) + "</span><br>" +
        "<span style='color: #2a68b9;'>Producto de números en el rango (120, 860]: </span><span style='color: white;'>" + productoNumerosEnRango120860 + "</span><br>" +
        "<span style='color: #2a68b9;'>Suma de menores a 75 o mayores iguales a 86: </span><span style='color: white;'>" + sumaMenores75MayoresIguales86 + "</span><br>" +
        "<span style='color: #2a68b9;'>Porcentaje de números pares: </span><span style='color: white;'>" + porcentajeNumerosPares.toFixed(2) + "%</span>";
});

function getOrdinal(number) {
    const suffixes = ["º", "º", "º", "º", "º", "º", "º", "º", "º", "º"];
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return number + "º";
    }

    return number + suffixes[lastDigit];
}