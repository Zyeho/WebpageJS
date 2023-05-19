let edad, nota, nombre;

nombre = prompt('Digite su nombre: ');
edad = parseFloat(prompt('Digite su edad: '));
nota = parseFloat(prompt('Digite su nota: '));

let genero;
genero = prompt('Digite su genero: ');
genero = genero.toUpperCase();

switch (genero) {
    case 'M':
        if (edad >= 18 && nota >= 5.0) {
            console.log('POSIBLE');
        } else {
            console.log('NO ACEPTADA');
        }
        break;
    case 'F':
        if (edad >= 18 && nota >= 5.0) {
            console.log('ACEPTADA');
        } else {
            console.log('NO ACEPTADA');
        }
        break;
    default:
        console.log('Género no reconocido');
        break;
}