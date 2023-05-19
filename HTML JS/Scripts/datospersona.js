document.getElementById('calcularBtn4').addEventListener('click', function() {
    let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas a ingresar:"));

    while (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
        const opcion = prompt(
            "Cantidad inválida de personas. ¿Desea reingresar la cantidad de personas? (S = sí / N = no)"
        );

        if (opcion && opcion.toUpperCase() === "N") {
            return; // Salir del programa
        }

        cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas a ingresar:"));
    }

    const personas = [];

    for (let i = 0; i < cantidadPersonas; i++) {
        let codigo = "";
        let nombre = "";
        let edad = 0;
        let sexo = "";
        let peso = 0;
        let estadoCivil = "";

        do {
            codigo = prompt(`Ingrese el código para la ${getOrdinal(i + 1)} persona:`);

            if (!codigo) {
                alert(`Por favor, ingrese un código válido para la ${getOrdinal(i + 1)} persona.`);
            }
        } while (!codigo);

        do {
            nombre = prompt(`Ingrese el nombre para la ${getOrdinal(i + 1)} persona:`);

            if (!nombre || !/^[A-Za-záéíóúñ\s]+$/.test(nombre)) {
                alert(`Por favor, ingrese un nombre válido para la ${getOrdinal(i + 1)} persona.`);
            }
        } while (!nombre || !/^[A-Za-záéíóúñ\s]+$/.test(nombre));

        do {
            const edadInput = prompt(`Ingrese la edad para la ${getOrdinal(i + 1)} persona:`);
            edad = parseInt(edadInput);

            if (isNaN(edad) || edad <= 0) {
                alert(`Por favor, ingrese una edad válida mayor a cero para la ${getOrdinal(i + 1)} persona.`);
            }
        } while (isNaN(edad) || edad <= 0);

        do {
            sexo = prompt(`Ingrese el sexo (M: Masculino, F: Femenino) para la ${getOrdinal(i + 1)} persona:`).toUpperCase();

            if (sexo !== 'M' && sexo !== 'F') {
                alert(`Por favor, ingrese un sexo válido (M/F) para la ${getOrdinal(i + 1)} persona.`);
            }
        } while (sexo !== 'M' && sexo !== 'F');

        if (sexo === 'M') {
            sexo = 'Masculino';
        } else {
            sexo = 'Femenino';
        }

        do {
            const pesoInput = prompt(`Ingrese el peso en kilos para la ${getOrdinal(i + 1)} persona:`);
            peso = parseFloat(pesoInput);

            if (isNaN(peso) || peso <= 0) {
                alert(`Por favor, ingrese un peso válido mayor a cero para la ${getOrdinal(i + 1)} persona.`);
            }
        } while (isNaN(peso) || peso <= 0);

        do {
            estadoCivil = prompt(`Ingrese el estado civil (S: Soltero/a, C: Casado/a, D: Divorciado/a, V: Viudo/a) para la ${getOrdinal(i + 1)} persona:`).toUpperCase();

            if (!['S', 'C', 'D', 'V'].includes(estadoCivil)) {
                alert(`Por favor, ingrese un estado civil válido (S/C/D/V) para la ${getOrdinal(i + 1)} persona.`);
            }
        } while (!['S', 'C', 'D', 'V'].includes(estadoCivil));

        switch (estadoCivil) {
            case 'S':
                estadoCivil = 'Soltero/a';
                break;
            case 'C':
                estadoCivil = 'Casado/a';
                break;
            case 'D':
                estadoCivil = 'Divorciado/a';
                break;
            case 'V':
                estadoCivil = 'Viudo/a';
                break;
        }

        personas.push({
            codigo,
            nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase(),
            edad,
            sexo,
            peso,
            estadoCivil
        });
    }

    let hombresSolterosHTML = "";
    let totalEdadesMujeresSolteras = 0;
    let mujeresSolterasCount = 0;

    personas.forEach(persona => {
        if (persona.sexo === 'Masculino' && persona.estadoCivil === 'Soltero/a' && persona.peso > 69) {
            hombresSolterosHTML += `<li>${persona.nombre}</li>`;
        }

        if (persona.sexo === 'Femenino' && persona.estadoCivil === 'Soltero/a') {
            totalEdadesMujeresSolteras += persona.edad;
            mujeresSolterasCount++;
        }
    });

    let resultadosHTML = "";

    if (hombresSolterosHTML !== "") {
        resultadosHTML += "<strong style='color: #2a68b9;'>Hombres solteros con peso mayor a 69 kilos:</strong><br>";
        resultadosHTML += `<ul style='color: white;'>${hombresSolterosHTML}</ul><br>`;
    } else {
        resultadosHTML += "<strong>Hombres solteros con peso mayor a 69 kilos:</strong> No hay hombres solteros con peso mayor a 69 kilos.<br><br>";
    }

    if (mujeresSolterasCount > 0) {
        const edadPromedioMujeresSolteras = totalEdadesMujeresSolteras / mujeresSolterasCount;
        resultadosHTML += `<strong style='color: #2a68b9;'>Edad promedio de mujeres solteras:</strong> ${edadPromedioMujeresSolteras.toFixed(2)} años<br><br>`;
    } else {
        resultadosHTML += "<strong style='color: #2a68b9;'>Edad promedio de mujeres solteras:</strong> No hay mujeres solteras.<br><br>";
    }

    resultadosHTML += "<strong style='color: #2a68b9;'>Lista de personas ingresadas:</strong><br>";

    personas.forEach(persona => {
        resultadosHTML += `<span style='color: #2a68b9;'>Código:</span> ${persona.codigo}<br>`;
        resultadosHTML += `<span style='color: #2a68b9;'>Nombre:</span> ${persona.nombre}<br>`;
        resultadosHTML += `<span style='color: #2a68b9;'>Edad:</span> ${persona.edad}<br>`;
        resultadosHTML += `<span style='color: #2a68b9;'>Sexo:</span> ${persona.sexo}<br>`;
        resultadosHTML += `<span style='color: #2a68b9;'>Peso:</span> ${persona.peso}<br>`;
        resultadosHTML += `<span style='color: #2a68b9;'>Estado Civil:</span> ${persona.estadoCivil}<br>`;
        resultadosHTML += "------------------------------------------------------------------------------------------------------<br>";
    });

    document.getElementById('resultados').innerHTML = resultadosHTML;
});

function getOrdinal(number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = number % 100;

    return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
}