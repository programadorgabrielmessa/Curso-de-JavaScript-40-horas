var vel = 78.2;
console.log(`A velocidade da pista é ${vel} km/h`);

if (vel > 80) {
    console.log(`Você será multado em: R$ ${(80 * 2).toFixed(2)}`);
} else if (vel > 60) {
    console.log('Você ultrapassou a velocidade da pista e será multado');
} else {
    console.log('Você está dentro do limite de velocidade');
}
