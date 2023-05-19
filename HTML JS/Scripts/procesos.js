document.getElementById("calcularBtn1").addEventListener("click", function() {
    const procesos = [];

    let cantidadProcesos = parseInt(prompt("Ingrese la cantidad de procesos:"));
    while (isNaN(cantidadProcesos) || cantidadProcesos <= 0) {
        const opcion = prompt("Cantidad de procesos inválida. ¿Desea salir del script? (s/n)").toLowerCase();
        if (opcion === "s") {
            return;
        }
        cantidadProcesos = parseInt(prompt("Ingrese la cantidad de procesos:"));
    }

    for (let i = 0; i < cantidadProcesos; i++) {
        const codigo = prompt(`Ingrese el código del proceso (${i + 1}):`);
        if (!codigo) {
            alert("Debe ingresar el código del proceso.");
            i--;
            continue;
        }

        const nombre = prompt(`Ingrese el nombre del proceso (${i + 1}):`);
        if (!nombre) {
            alert("Debe ingresar el nombre del proceso.");
            i--;
            continue;
        }

        let tamano = parseInt(prompt(`Ingrese el tamaño en bytes del proceso (${i + 1}):`));
        if (isNaN(tamano) || tamano <= 0) {
            alert("Tamaño inválido. Ingrese un número válido para el tamaño del proceso.");
            i--;
            continue;
        }

        let tiempoEjecucion = parseInt(prompt(`Ingrese el tiempo de ejecución del proceso (${i + 1}) en segundos:`));
        if (isNaN(tiempoEjecucion) || tiempoEjecucion <= 0) {
            alert("Tiempo de ejecución inválido. Ingrese un número válido para el tiempo de ejecución del proceso.");
            i--;
            continue;
        }

        procesos.push({ codigo, nombre, tamano, tiempoEjecucion });
    }

    const procesosFiltrados = procesos.filter(proceso => proceso.tamano < 1500);
    if (procesosFiltrados.length === 0) {
        document.getElementById("resultados").innerHTML = "No se encontraron procesos con tamaño inferior a 1500 bytes.";
        return;
    }

    const cantidadTotal = procesos.length;
    const cantidadFiltrados = procesosFiltrados.length;

    const tiempoPromedioTodos = procesos.reduce((sum, proceso) => sum + proceso.tiempoEjecucion, 0) / cantidadTotal;
    const tiempoPromedioFiltrados = procesosFiltrados.reduce((sum, proceso) => sum + proceso.tiempoEjecucion, 0) / cantidadFiltrados;
    const nombresProcesosFiltrados = procesosFiltrados.map(proceso => proceso.nombre);

    document.getElementById("resultados").innerHTML = `Cantidad total de procesos: ${cantidadTotal}<br>`;
    document.getElementById("resultados").innerHTML += `Cantidad de procesos con tamaño inferior a 1500 bytes: ${cantidadFiltrados}<br>`;
    document.getElementById("resultados").innerHTML += `Tiempo promedio de ejecución de todos los procesos: ${tiempoPromedioTodos.toFixed(2)} segundos<br>`;
    document.getElementById("resultados").innerHTML += `Tiempo promedio de ejecución de los procesos con tamaño inferior a 1500 bytes: ${tiempoPromedioFiltrados.toFixed(2)} segundos<br>`;
    document.getElementById("resultados").innerHTML += `Nombres de los procesos con tamaño inferior a 1500 bytes: ${nombresProcesosFiltrados.join(", ")}`;
});