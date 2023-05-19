// Exercise 1(a)

let numbers = [23, 56, 789, 111, 342, 675, 499]
function calculateAvg (numbers) {
    const filtrate = numbers.filter(num => num % 2 !== 0 && num < 750);
    if (filtrate.length === 0) {
        return "No hay numeros impares menores a 750 para calcular el promedio."
    }
    const sum = filtrate.reduce((acum, num) => acum + num, 0);
    const avgE = sum / filtrate.length;
    console.log("El promedio de los números impares menores a 750 es: " + avgE);
}
calculateAvg(numbers);

// Exercise 1(b)

function multiplyRange (numbers) {
    const filtrate = numbers.filter(num => num > 120 && num <= 860)
    if (filtrate.length === 0) {
        return "No hay numeros dentro del rango para calcular el producto."
    }
    const multiply = filtrate.reduce((a, b) => a * b);
    console.log("El producto de los numeros que estan dentro del intervalo (120,860] es: " + multiply);
}
multiplyRange(numbers);

// Exercise 1(c)

function add (numbers) {
    const filtrate = numbers.filter(num => num < 75 || num >= 86)
    if (filtrate.length === 0) {
        return "No hay numeros dentro del rango para la suma."
    }
    const addition = filtrate.reduce((a, b) => a + b);
    console.log("La suma de los numeros que estan dentro de los parametros especificados es: " + addition);
}
add(numbers);

// Exercise 1(d)

function evenPercent (numbers) {
    const filtrate = numbers.filter(num => num % 2 === 0);
    if (filtrate.length === 0) {
        return "No hay numeros pares para calcular el porcentaje."
    }
    const percent = (filtrate.length / numbers.length) * 100;
    console.log("Porcentaje de números pares: " + percent.toFixed(2) + "%");
}
evenPercent(numbers);