var pais = 'EUA';
pais = pais.toLowerCase();

console.log(`Você é estrangeiro do país ${pais.toUpperCase()}`);

switch (pais) {
    case 'brasil':
        console.log('Este país está na América do Sul');
        break;
    case 'portugal':
        console.log('Este país está na Europa');
        break;
    case 'eua':
        console.log('Este país está na América do Norte');
        break;
    default:
        console.log('Não temos informações sobre este país');
}
