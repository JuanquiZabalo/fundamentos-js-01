const puntuacion = 55
const dia = 7

if (puntuacion >= 70) {
    console.log('Aprobado')
}
else{
    console.log('Suspenso')
}

switch (dia) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miercoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sabado')
        break;
    case 7:
        console.log('Domingo')
        break
    default:
        console.log('Viernes')
        break;
}

const temperaturaCelsius = 20

function convertirFahrenheit(temperatura) {
    return (temperatura * 9/5) + 32
    
}

console.log(convertirFahrenheit(temperaturaCelsius))

function esPar(numero) {
    return numero % 2 === 0
}

console.log(esPar(4.2))