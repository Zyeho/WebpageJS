function obtenerPorcentajeDanos() {
    let totalPerifericos = parseInt(prompt("Ingrese el número total de periféricos:"));

    while (isNaN(totalPerifericos) || totalPerifericos <= 0) {
        const opcion = prompt(
            "Cantidad inválida de periféricos. ¿Desea reingresar el dato? (S = sí / N = no)"
        );

        if (opcion && opcion.toUpperCase() === "N") {
            return; // Salir del programa
        }

        totalPerifericos = parseInt(prompt("Ingrese el número total de periféricos:"));
    }

    let perifericosDanados = 0;
    let perifericosFuncionandoBien = [];
    let perifericosDanadosLista = [];

    for (let i = 1; i <= totalPerifericos; i++) {
        let nombrePeriferico = prompt("Ingrese el nombre del periférico " + i + ":");
        let estado = prompt("Seleccione el estado del periférico " + nombrePeriferico + ": (B = bien / D = dañado)");

        while (estado.toUpperCase() !== "B" && estado.toUpperCase() !== "D") {
            estado = prompt("Valor inválido. Seleccione el estado del periférico " + nombrePeriferico + ": (B = bien / D = dañado)");
        }

        if (estado.toUpperCase() === "D") {
            perifericosDanados++;
            perifericosDanadosLista.push(nombrePeriferico);
        } else {
            perifericosFuncionandoBien.push(nombrePeriferico);
        }
    }

    let porcentajeDanos = (perifericosDanados / totalPerifericos) * 100;

    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<span style='color: #2a68b9;'>Cantidad total de periféricos: </span><span style='color: white;'>" + totalPerifericos + "</span><br>";
    resultadosDiv.innerHTML += "<span style='color: #2a68b9;'>Porcentaje de periféricos dañados: </span><span style='color: white;'>" + porcentajeDanos.toFixed(2) + "%</span><br>";

    if (perifericosDanados > 0) {
        resultadosDiv.innerHTML += "<span style='color: #2a68b9;'>Periféricos funcionando correctamente: </span><span style='color: white;'>" + perifericosFuncionandoBien.join(", ").toUpperCase() + "</span><br>";
        resultadosDiv.innerHTML += "<span style='color: #2a68b9;'>Periféricos dañados: </span><span style='color: white;'>" + perifericosDanadosLista.join(", ").toUpperCase() + "</span>";
    } else {
        resultadosDiv.innerHTML += "<span style='color: #2a68b9;'>No hay periféricos dañados.</span>";
    }

    resultadosDiv.style.color = "white";
}

document.getElementById("calcularBtn2").addEventListener("click", obtenerPorcentajeDanos);