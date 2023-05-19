document.getElementById('calcularBtn5').addEventListener('click', function() {
    let nombre, edad, nota;

    nombre = prompt('Digite su nombre: ');
    if (!nombre || !/^[A-Za-záéíóúñ\s]+$/.test(nombre)) {
        document.getElementById('resultados').textContent = 'Por favor, ingrese un nombre válido.';
        return;
    }

    const edadInput = prompt('Digite su edad: ');
    if (!edadInput) {
        document.getElementById('resultados').textContent = 'Por favor, ingrese una edad válida.';
        return;
    }
    edad = parseFloat(edadInput);
    if (isNaN(edad) || edad <= 0) {
        document.getElementById('resultados').textContent = 'Por favor, ingrese una edad válida mayor a cero.';
        return;
    }

    const notaInput = prompt('Digite su nota: ');
    if (!notaInput) {
        document.getElementById('resultados').textContent = 'Por favor, ingrese una nota válida.';
        return;
    }
    nota = parseFloat(notaInput);
    if (isNaN(nota) || nota < 0 || nota > 10) {
        document.getElementById('resultados').textContent = 'Por favor, ingrese una nota válida entre 0 y 10.';
        return;
    }

    let genero = prompt('Digite su género (M: Masculino, F: Femenino): ');
    if (!genero) {
        document.getElementById('resultados').textContent = 'Por favor, ingrese un género válido.';
        return;
    }
    genero = genero.toUpperCase();

    let resultado = '';

    switch (genero) {
        case 'M':
            if (edad >= 18 && nota >= 5.0) {
                resultado = 'ACEPTADO';
            } else {
                resultado = 'NO ACEPTADO';
            }
            break;
        case 'F':
            if (edad >= 18 && nota >= 5.0) {
                resultado = 'ACEPTADA';
            } else {
                resultado = 'NO ACEPTADA';
            }
            break;
        default:
            resultado = 'Género no reconocido';
            break;
    }

    document.getElementById('resultados').textContent = resultado;
});
