const mes = 2

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log('Invierno')
        break;
    case 3:
    case 4:
    case 5:
        console.log('Primavera')
        break
    case 6:
    case 7:
    case 8:
        console.log('Verano')
        break
    case 9:
    case 10:
    case 11:
        console.log('Otonio')
        break
    default:
        console.log('Mes incorrecto')
        break;
}

function calcularDiasMes(mes= Number){
    if (mes > 0 && mes <= 12) {
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31
            case 2:
                return 28
            default:
                return 30
        }
    }
    return 0
}

console.log(`El mes ${mes} tiene ${calcularDiasMes(mes)} dias`)