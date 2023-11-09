function esMayorEdad(edad) {
    return edad >= 18 ? true: false
}

const hora = 18

if (hora < 12) {
    console.log('Buenos dias')
}
else if (hora >= 12 && hora < 18) {
    console.log('Buenas tardes')
}
else {
    console.log('Buenas Noches')
}

const edad = 17
const esEstudiante = true

if (esMayorEdad(edad) && esEstudiante) {
    console.log('Es mayor de edad y es estudiante')
}
else if (esMayorEdad(edad) && !esEstudiante) {
    console.log('Es mayor de edad y no es estudiante')
}
else if(!esMayorEdad(edad) && esEstudiante){
    console.log('Es menor de edad y es estudiante')
}
else{
    console.log('Es menor de edad y no es estudiante')
}

function esVocal(letra=String) {
    const vocales = 'aeiouAEIOU'
    if (vocales.includes(letra)) {
        return true
    }
    return false
}

const caracter = 'I'

console.log(`Es ${caracter} vocal:`, esVocal(caracter))