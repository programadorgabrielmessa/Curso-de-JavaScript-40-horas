var agora = new Date()
var diaSem = agora.getDate()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça Feira
    3 = Quarta feira
    4 = Quinta Feira
    5 = Sexta Feira
    6 = Sabado

*/
switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça Feira')
        break
    case 3:
        console.log('Quarta feira')
        break
    case 4:
        console.log('Quinta feira')
        break
    case 5:
        console.log('Sexta feira')
        break
    case 6:
        console.log('Sabado ')
        break
    default:
        console.log('Dia invalido!')

}

console.log(diaSem)

